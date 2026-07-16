import { Resend } from 'resend';
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async (email, fullName, companyName) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="color-scheme" content="light">
            <meta name="supported-color-schemes" content="light">
            <title>Welcome to AX Ventures</title>
            <style>
                :root {
                    color-scheme: light;
                    supported-color-schemes: light;
                }
            </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FFFFFF; color: #000000; -webkit-font-smoothing: antialiased;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" style="background-color: #FFFFFF;">
                <tr>
                    <td align="center" style="padding: 40px 20px;">
                        <!-- Main Container (Minimal) -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #FFFFFF; text-align: left; border: 1px solid #E5E7EB; border-radius: 16px; overflow: hidden;">
                            
                            <!-- Header -->
                            <tr>
                                <td align="center" style="padding: 56px 48px; border-bottom: 1px solid #E5E7EB;">
                                    <h1 style="font-size: 38px; font-weight: 800; letter-spacing: -0.04em; text-transform: uppercase; color: #000000; margin: 0;">
                                        AX <span style="color: #1801AD;">Ventures</span>
                                    </h1>
                                    
                                    <!-- Divider -->
                                    <div style="margin: 24px auto 0; height: 4px; width: 80px; border-radius: 9999px; background-color: #1801AD;"></div>
                                    
                                    <!-- Badge -->
                                    <div style="margin-top: 32px; display: inline-block; border-radius: 9999px; background-color: #EEF2FF; padding: 8px 16px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #1801AD;">
                                        Application Received
                                    </div>
                                </td>
                            </tr>

                            <!-- Body -->
                            <tr>
                                <td style="padding: 48px;">
                                    <h2 style="font-size: 30px; font-weight: 700; color: #111827; margin: 0 0 32px 0;">
                                        Hello ${fullName},
                                    </h2>

                                    <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 32px; color: #4B5563;">
                                        Thank you for submitting your application to <span style="font-weight: 600; color: #000000;">AX Ventures</span>. We are excited to learn more about <span style="font-weight: 600; color: #000000;">${companyName}</span>.
                                    </p>

                                    <p style="margin: 0 0 48px 0; font-size: 16px; line-height: 32px; color: #4B5563;">
                                        Our investment team reviews every pitch carefully. We partner with bold founders at the earliest stages who are obsessed with solving hard problems. We will reach out to you within <span style="font-weight: 600; color: #000000;">48 hours</span> if there is alignment.
                                    </p>

                                    <!-- Application Details (Minimal) -->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 1px solid #E5E7EB; border-radius: 12px; background-color: #F9FAFB;">
                                        <tr>
                                            <td style="padding: 32px;">
                                                <h3 style="margin: 0 0 32px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; color: #6B7280;">
                                                    Application Details
                                                </h3>

                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 16px; border-bottom: 1px solid #E5E7EB;">
                                                            <span style="font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280;">Applicant</span>
                                                        </td>
                                                        <td align="right" style="padding-bottom: 16px; border-bottom: 1px solid #E5E7EB;">
                                                            <span style="font-size: 16px; font-weight: 600; color: #111827;">${fullName}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 16px 0; border-bottom: 1px solid #E5E7EB;">
                                                            <span style="font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280;">Company</span>
                                                        </td>
                                                        <td align="right" style="padding: 16px 0; border-bottom: 1px solid #E5E7EB;">
                                                            <span style="font-size: 16px; font-weight: 600; color: #111827;">${companyName}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding-top: 16px;">
                                                            <span style="font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280;">Status</span>
                                                        </td>
                                                        <td align="right" style="padding-top: 16px;">
                                                            <span style="display: inline-block; border-radius: 9999px; background-color: #DCFCE7; padding: 8px 16px; font-size: 14px; font-weight: 700; color: #15803D;">Under Review</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>

                                    <p style="margin: 40px 0 0 0; font-size: 15px; line-height: 28px; color: #4B5563;">
                                        If you have any additional pitch materials or details to share in the meantime, feel free to reply directly to this email.
                                    </p>
                                    
                                    <div style="margin-top: 48px; border-top: 1px solid #E5E7EB; padding-top: 32px;">
                                        <p style="margin: 0 0 8px 0; font-size: 16px; line-height: 28px; color: #374151;">
                                            Best regards,
                                        </p>
                                        <p style="margin: 0; font-size: 18px; font-weight: 700; color: #000000;">
                                            The AX Ventures Team
                                        </p>
                                    </div>
                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td align="center" style="border-top: 1px solid #E5E7EB; background-color: #F9FAFB; padding: 32px 40px;">
                                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #6B7280;">
                                        &copy; ${new Date().getFullYear()} AX Ventures. All rights reserved.
                                    </p>
                                    <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #9CA3AF;">
                                        Confidential &amp; Proprietary
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `

    try {
        const { data, error } = await resend.emails.send({
            from: 'AX Ventures <info@axventures.in>',
            to: email, // Note: You must verify axventures.in in Resend for this to work
            subject: `Welcome to AX Ventures - ${companyName}`,
            html: htmlContent
        });

        if (error) {
            console.error("[MailService] Error from Resend:", error);
            return false;
        }

        console.log(`[MailService] Welcome email successfully sent to ${email} via Resend. ID: ${data?.id}`);
        return true;
    } catch (error) {
        console.error("[MailService] Exception while sending welcome email via Resend:", error);
        return false;
    }
};