const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Validate input
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Get site URL from environment or use default
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'https://your-netlify-site.netlify.app';

    // Email to admin (you) about new message
    const adminMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🔔 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px; text-align: center;">
              📬 New Contact Message
            </h2>
            
            <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0; color: #1565c0; font-weight: bold;">
                You have a new message to check in your admin page!
              </p>
            </div>

            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0;">Message Details:</h3>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">From:</strong> ${name}
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Email:</strong> 
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Message:</strong>
              </div>
              
              <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px;">
                <p style="margin: 0; line-height: 1.6; color: #333;">
                  ${message.replace(/\n/g, '<br>')}
                </p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="${siteUrl}/admin" 
                 style="background-color: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                📊 View Admin Dashboard
              </a>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
              <p style="margin: 0;">This email was sent automatically from your portfolio contact form.</p>
              <p style="margin: 5px 0 0 0;">Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Email confirmation to the person who sent the message
    const confirmationMailOptions = {
      from: `"Aymen Belkadi - Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '✅ Message Received - Aymen Belkadi Portfolio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px; text-align: center;">
              Thank You for Your Message!
            </h2>
            
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="display: inline-block; background-color: #e8f5e8; padding: 15px; border-radius: 50%; margin-bottom: 20px;">
                <span style="font-size: 40px;">✅</span>
              </div>
            </div>

            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Hello <strong>${name}</strong>,
            </p>

            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out through my portfolio! I have successfully received your message and will get back to you as soon as possible, typically within 24-48 hours.
            </p>

            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #333; margin-top: 0;">Your Message Summary:</h4>
              <p style="margin: 10px 0 0 0; color: #666; font-style: italic;">
                "${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"
              </p>
            </div>

            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to explore my projects and learn more about my work. I'm excited to discuss potential opportunities with you!
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${siteUrl}" 
                 style="background-color: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                🌐 Visit My Portfolio
              </a>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
              <p style="margin: 0;">Best regards,</p>
              <p style="margin: 5px 0; font-weight: bold; color: #2563eb;">Aymen Belkadi</p>
              <p style="margin: 5px 0 0 0;">Full Stack Developer</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ message: 'Emails sent successfully' }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
};