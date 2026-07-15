import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import apiRoutes from './routes/api.js';

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

// Request Logging Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} | Origin: ${req.headers.origin || 'None'}`);
  next();
});

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

      // Allow exactly matched allowed origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      
      // Allow any Vercel preview/production deployments
      if (origin.endsWith('.vercel.app')) {
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

// Use API Routes
app.use('/api', apiRoutes);

// Root Endpoint (For Backend Health/Status)
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'AX Ventures API is running.',
  });
});

// Unknown API Routes
app.use('/api', (req, res) => {
  res.status(404).json({
    error: 'API route not found',
  });
});

// Fallback for any other unmatched routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
  });
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