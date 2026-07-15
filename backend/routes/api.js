import express from 'express';
import { handleWelcomeEmail } from '../controllers/emailController.js';

const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is secure and running.',
  });
});

router.post('/send-welcome-email', handleWelcomeEmail);

export default router;
