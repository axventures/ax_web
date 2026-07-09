import { sendWelcomeEmail } from './backend/mailService.js';

async function test() {
  console.log("Testing email...");
  try {
    const success = await sendWelcomeEmail('kisofurniture@gmail.com', 'Test User', 'Test Company');
    console.log("Email sent successfully:", success);
  } catch (err) {
    console.error("Email sending failed:", err);
  }
}
test();
