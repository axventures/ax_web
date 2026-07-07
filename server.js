import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

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

// 4. Data Sanitization against NoSQL query injection
// Removes any keys containing prohibited characters (like $)
app.use(mongoSanitize());

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

