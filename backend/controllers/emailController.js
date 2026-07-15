import { sendWelcomeEmail } from '../services/mailService.js';

export const handleWelcomeEmail = async (req, res) => {
  try {
    console.log(`[EmailController] Received email request:`, req.body);
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
};
