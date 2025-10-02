const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Initialize Firebase Admin
admin.initializeApp();

// Configure email transporter (using Gmail with App Password)
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: functions.config().email.user, // Your Gmail address
    pass: functions.config().email.password // Your Gmail App Password (not regular password)
  }
});

// Cloud Function triggered when a new message is added to the database
exports.sendContactEmails = functions.database
  .ref('/messages/{messageId}')
  .onCreate(async (snapshot, context) => {
    const messageData = snapshot.val();
    const messageId = context.params.messageId;

    try {
      // Email content for client confirmation
      const clientEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Message Confirmation</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #2563eb;">Thank you for your message!</h2>

                <p>Dear ${messageData.name},</p>

                <p>Thank you for reaching out through my portfolio. I have received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>

                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p><strong>Your message details:</strong></p>
                    <p><strong>Name:</strong> ${messageData.name}</p>
                    <p><strong>Email:</strong> ${messageData.email}</p>
                    <p><strong>Time:</strong> ${new Date(messageData.timestamp).toLocaleString()}</p>
                </div>

                <p>If you have any additional information or questions, feel free to reply to this email.</p>

                <p>Best regards,<br>
                <strong>Aymen Belkadi</strong><br>
                Portfolio: <a href="https://aymenbelkadi.dev">aymenbelkadi.dev</a><br>
                Email: portfolioaymen@gmail.com</p>

                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                <p style="font-size: 12px; color: #666;">
                    This is an automated message. Please do not reply to this email.
                </p>
            </div>
        </body>
        </html>
      `;

      // Email content for admin notification
      const adminEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>New Contact Message</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #dc2626;">New Contact Form Message</h2>

                <p>You have received a new message through your portfolio contact form.</p>

                <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #dc2626;">Message Details:</h3>
                    <p><strong>Name:</strong> ${messageData.name}</p>
                    <p><strong>Email:</strong> ${messageData.email}</p>
                    <p><strong>Time:</strong> ${new Date(messageData.timestamp).toLocaleString()}</p>
                    <p><strong>Message ID:</strong> ${messageId}</p>
                </div>

                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="margin-top: 0;">Message:</h3>
                    <p style="white-space: pre-wrap;">${messageData.message}</p>
                </div>

                <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p><strong>Action Required:</strong></p>
                    <p>Please check your admin panel to view and respond to this message.</p>
                    <p><a href="https://aymenbelkadi.dev/admin" style="color: #2563eb; text-decoration: underline;">Go to Admin Panel</a></p>
                </div>

                <p>Best regards,<br>
                <strong>Portfolio Contact System</strong></p>
            </div>
        </body>
        </html>
      `;

      // Send confirmation email to client
      await transporter.sendMail({
        from: `"Aymen Belkadi Portfolio" <${functions.config().email.user}>`,
        to: messageData.email,
        subject: 'Thank you for your message - Aymen Belkadi Portfolio',
        html: clientEmailHtml,
        replyTo: 'noreply@aymenbelkadi.dev'
      });

      // Send notification email to admin
      await transporter.sendMail({
        from: `"Portfolio Contact System" <${functions.config().email.user}>`,
        to: functions.config().email.admin, // Set this with: firebase functions:config:set email.admin="your-admin-email@example.com"
        subject: `New Contact Message - ${messageData.name}`,
        html: adminEmailHtml
      });

      console.log('Emails sent successfully for message:', messageId);
      return null;

    } catch (error) {
      console.error('Error sending emails:', error);
      // You might want to store failed email attempts in the database
      return null;
    }
  });