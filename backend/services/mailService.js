import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

export const sentOtp = async (email) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Welcome to AX Ventures",
    }
    try {
        await transporter.sendMail(mailOptions)
        console.log("Success")
    } catch (e) {
        console.log("Error while sending otp ", e)
    }
}

export const sendWelcomeEmail = async (email, fullName, companyName) => {
    // Check if EMAIL and PASSWORD are configured
    if (!process.env.EMAIL || !process.env.PASSWORD) {
        console.warn("[MailService] SMTP credentials missing in environment variables. Email not sent.");
        return false;
    }

    const mailOptions = {
        from: `"AX Ventures" <${process.env.EMAIL}>`,
        to: email,
        subject: `Welcome to AX Ventures - ${companyName}`,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to AX Ventures</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #030303; -webkit-font-smoothing: antialiased;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#030303">
                <tr>
                    <td align="center" style="padding: 40px 20px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background: linear-gradient(145deg, #0A0A0A 0%, #0F0F16 100%); border-radius: 16px; border: 1px solid rgba(24, 1, 173, 0.2); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 40px rgba(24, 1, 173, 0.1);">
                            
                            <!-- Header -->
                            <tr>
                                <td align="center" style="padding: 50px 40px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                                    <h2 style="color: #FFFFFF; font-size: 28px; font-weight: 800; letter-spacing: -0.04em; text-transform: uppercase; margin: 0;">
                                        AX <span style="color: #1801AD;">Ventures</span>
                                    </h2>
                                </td>
                            </tr>
                            
                            <!-- Body Content -->
                            <tr>
                                <td style="padding: 50px 40px;">
                                    <div style="display: inline-block; background-color: rgba(24, 1, 173, 0.15); border: 1px solid rgba(24, 1, 173, 0.3); color: #4facfe; padding: 6px 14px; border-radius: 100px; font-size: 11px; font-weight: 700; margin-bottom: 30px; text-transform: uppercase; letter-spacing: 0.1em;">
                                        Application Received
                                    </div>
                                    
                                    <h1 style="font-size: 24px; font-weight: 700; color: #FFFFFF; margin-top: 0; margin-bottom: 20px; letter-spacing: -0.02em;">
                                        Hello ${fullName},
                                    </h1>
                                    
                                    <p style="font-size: 16px; line-height: 1.7; color: #94A3B8; margin-bottom: 24px; margin-top: 0;">
                                        Thank you for submitting your application to AX Ventures. We are excited to learn more about <strong style="color: #FFFFFF;">${companyName}</strong>.
                                    </p>
                                    
                                    <p style="font-size: 16px; line-height: 1.7; color: #94A3B8; margin-bottom: 36px; margin-top: 0;">
                                        Our investment team reviews every pitch carefully. We partner with bold founders at the earliest stages who are obsessed with solving hard problems. We will reach out to you within <strong style="color: #FFFFFF;">48 hours</strong> if there is alignment.
                                    </p>
                                    
                                    <!-- Status Card -->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; margin-bottom: 36px;">
                                        <tr>
                                            <td style="padding: 24px;">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 12px; font-size: 13px; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Applicant</td>
                                                        <td align="right" style="padding-bottom: 12px; font-size: 14px; color: #FFFFFF; font-weight: 500;">${fullName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding-bottom: 12px; font-size: 13px; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Company</td>
                                                        <td align="right" style="padding-bottom: 12px; font-size: 14px; color: #FFFFFF; font-weight: 500;">${companyName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-size: 13px; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Status</td>
                                                        <td align="right" style="font-size: 14px; color: #10B981; font-weight: 700; letter-spacing: 0.02em;">Under Review</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>

                                    <p style="font-size: 15px; line-height: 1.6; color: #64748B; margin-bottom: 30px; margin-top: 0; font-style: italic;">
                                        If you have any additional pitch materials or details to share in the meantime, feel free to reply directly to this email.
                                    </p>
                                    
                                    <p style="font-size: 16px; line-height: 1.6; color: #94A3B8; margin-bottom: 0; margin-top: 0;">
                                        Best regards,<br>
                                        <strong style="color: #FFFFFF; display: inline-block; margin-top: 8px;">The AX Ventures Team</strong>
                                    </p>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td align="center" style="padding: 30px 40px; background-color: rgba(0, 0, 0, 0.3); border-top: 1px solid rgba(255, 255, 255, 0.03); font-size: 12px; color: #475569; letter-spacing: 0.02em;">
                                    &copy; ${new Date().getFullYear()} AX Ventures. All rights reserved.<br>
                                    <span style="display: inline-block; margin-top: 8px;">Confidential & Proprietary</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log(`[MailService] Welcome email successfully sent to ${email}`);
        return true;
    } catch (e) {
        console.error("[MailService] Error while sending welcome email:", e);
        throw e;
    }
}