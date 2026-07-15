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
        <div style="font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #FAF9F6; padding: 40px 20px; color: #1E293B;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 24px; border: 1px solid rgba(0, 0, 0, 0.06); box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.05); overflow: hidden;">
                <div style="background-color: #0A0A0A; padding: 40px 32px; text-align: center; border-bottom: 3px solid #1801AD;">
                    <h2 style="color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: -0.03em; text-transform: uppercase; margin: 0;">AX <span style="color: #1801AD;">Ventures</span></h2>
                </div>
                <div style="padding: 40px 32px;">
                    <div style="display: inline-block; background-color: rgba(24, 1, 173, 0.08); color: #1801AD; padding: 6px 12px; border-radius: 100px; font-size: 12px; font-weight: 700; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.05em;">Application Received</div>
                    <h1 style="font-size: 24px; font-weight: 800; color: #0A0A0A; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.02em;">Hello ${fullName},</h1>
                    <p style="font-size: 16px; line-height: 1.6; color: #64748B; margin-bottom: 24px; margin-top: 0;">Thank you for submitting your application to AX Ventures. We are excited to learn more about <strong> ${companyName}</strong>.</p>
                    <p style="font-size: 16px; line-height: 1.6; color: #64748B; margin-bottom: 24px; margin-top: 0;">Our investment team reads every pitch and we will reach out to you within 48 hours if there is alignment.</p>
                    
                    <div style="background-color: #FAF9F6; border: 1px solid rgba(0, 0, 0, 0.05); border-radius: 16px; padding: 20px; margin-bottom: 24px;">
                        <div style="margin-bottom: 10px; font-size: 14px; display: flex; justify-content: space-between;"><strong style="color: #1E293B;">Applicant:</strong> <span style="color: #64748B;"> ${fullName}</span></div>
                        <div style="margin-bottom: 10px; font-size: 14px; display: flex; justify-content: space-between;"><strong style="color: #1E293B;">Company:</strong> <span style="color: #64748B;"> ${companyName}</span></div>
                        <div style="font-size: 14px; display: flex; justify-content: space-between;"><strong style="color: #1E293B;">Status:</strong> <span style="color: #10B981; font-weight: 700;">Under Review</span></div>
                    </div>

                    <p style="font-size: 16px; line-height: 1.6; color: #64748B; margin-bottom: 24px; margin-top: 0;">We partner with bold founders at the earliest stages. If you have any additional pitch materials or details to share in the meantime, feel free to reply directly to this email.</p>
                    <p style="font-size: 16px; line-height: 1.6; color: #64748B; margin-bottom: 0; margin-top: 0;">Best regards,<br><strong style="color: #1E293B;">The AX Ventures Team</strong></p>
                </div>
                <div style="background-color: #FAF9F6; padding: 24px; text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid rgba(0, 0, 0, 0.05);">
                    © ${new Date().getFullYear()} AX Ventures. All rights reserved.
                </div>
            </div>
        </div>
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