import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { sendWelcomeEmail } from './backend/mailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Trust Render's proxy
app.set('trust proxy', 1);

// Security Headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Allowed Origins
const allowedOrigins = [
  'https://axventures.in',
  'https://www.axventures.in',
  'http://localhost:5173',
  'http://localhost:3000' // Local development
];

app.use(
  cors({
    origin(origin, callback) {
      console.log("Origin:", origin);

      // Allow requests without an Origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked Origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);
// Body Parsers
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// API Rate Limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    error: 'Too many requests. Please try again in 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api', apiLimiter);

// General Rate Limiter
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  message: {
    error: 'Too many requests.',
  },
});

app.use(generalLimiter);

// Serve Frontend
app.use(express.static(path.join(__dirname, 'dist')));

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is secure and running.',
  });
});

// Send Welcome Email
app.post('/api/send-welcome-email', async (req, res) => {
  try {
    const { email, fullName, companyName } = req.body;

    if (!email || !fullName) {
      return res.status(400).json({
        error: 'Email and Full Name are required.',
      });
    }

    const success = await sendWelcomeEmail(
      email,
      fullName,
      companyName
    );

    if (!success) {
      return res.status(500).json({
        error: 'Failed to send email.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Email sent successfully.',
    });
  } catch (error) {
    console.error('Email Route Error:', error);

    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
});

// Unknown API Routes
app.use('/api/', (req, res) => {
  res.status(404).json({
    error: 'API route not found',
  });
});

// React Catch-all Route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Global Error:', err);

  res.status(err.status || 500).json({
    status: err.status || 'error',
    message: err.message || 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
    }),
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});