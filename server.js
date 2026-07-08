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

// Enable trust proxy so rate limiters work correctly behind Render's load balancers
app.set('trust proxy', 1);

// ==========================================
// SECURITY MIDDLEWARES
// ==========================================

// 1. Helmet: Sets various HTTP headers for security
app.use(helmet({
  contentSecurityPolicy: false, // Disabling CSP for now to prevent issues with Vite's inline scripts/styles during dev
}));

// 2. CORS: Enable Cross-Origin Resource Sharing
app.use(cors({
    origin: ["https://axventures.in", "http://localhost:3000"],
    credentials: true
}));

// 3. Body Parser: Parse incoming JSON requests
app.use(express.json({ limit: '10kb' })); // Limit body size to prevent payload too large attacks
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// 4. Data Sanitization
// Removed express-mongo-sanitize because it's incompatible with Express 5 and MongoDB is not used.

// 5. Rate Limiting: Prevent Brute Force & DDoS
// Limit each IP to 100 requests per 15 minutes
const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000, 
  message: 'Too many requests from this IP, please try again in 15 minutes.',
  standardHeaders: true,
  legacyHeaders: false,
});
// Apply rate limiter to all /api routes (if you add an API later)
app.use('/api', limiter);

// Apply a more relaxed general rate limiter to the whole app (serving static files)
const generalLimiter = rateLimit({
  max: 500,
  windowMs: 15 * 60 * 1000, 
  message: 'Too many requests from this IP.',
});
app.use(generalLimiter);

// ==========================================
// SERVING FRONTEND
// ==========================================
// Serve static files from the React dist folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Server is secure and running.' });
});

app.post('/api/send-welcome-email', async (req, res) => {
  try {
    const { email, fullName, companyName } = req.body;
    if (!email || !fullName) {
      return res.status(400).json({ error: 'Email and Full Name are required' });
    }

    const success = await sendWelcomeEmail(email, fullName, companyName);
    if (!success) {
      return res.status(500).json({ error: 'Failed to send email due to server configuration' });
    }

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in send-welcome-email route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ==========================================
// GLOBAL ERROR HANDLER
// ==========================================
app.use((err, req, res, next) => {
  console.error('🔥 Error caught by Global Handler:', err);

  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  // In production, we don't want to leak stack traces
  res.status(statusCode).json({
    status: status,
    message: err.message || 'Something went very wrong!',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

app.listen(PORT, () => {
  console.log(` Secure Server running on port ${PORT}`);
});

