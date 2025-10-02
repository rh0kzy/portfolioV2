# EmailJS Setup Guide for Contact Form

This guide will help you set up email functionality for your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and give it a name (e.g., "portfolio-emails")
5. Note down the **Service ID** (it will look like `service_xxxxxxxxxx`)

## Step 3: Create Email Templates

### Client Confirmation Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use these settings:

**Template Name:** `Client Confirmation`

**Subject:**
```
Message Sent Successfully - Aymen Belkadi Portfolio
```

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Message Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">Thank you for your message!</h2>

        <p>Dear {{to_name}},</p>

        <p>Thank you for reaching out through my portfolio. I have received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>

        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your message details:</strong></p>
            <p><strong>Name:</strong> {{to_name}}</p>
            <p><strong>Email:</strong> {{to_email}}</p>
        </div>

        <p>If you have any additional information or questions, feel free to reply to this email.</p>

        <p>Best regards,<br>
        <strong>Aymen Belkadi</strong><br>
        Portfolio: <a href="https://your-portfolio-url.com">your-portfolio-url.com</a><br>
        Email: your-email@example.com</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="font-size: 12px; color: #666;">
            This is an automated message. Please do not reply to this email.
        </p>
    </div>
</body>
</html>
```

4. Save the template and note the **Template ID** (looks like `template_xxxxxxxxxx`)

### Admin Notification Template

1. Create another new template
2. Use these settings:

**Template Name:** `Admin Notification`

**Subject:**
```
New Contact Form Message - {{client_name}}
```

**To Email:** `your-admin-email@example.com` (replace with your actual email)

**HTML Content:**
```html
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
            <p><strong>Name:</strong> {{client_name}}</p>
            <p><strong>Email:</strong> {{client_email}}</p>
            <p><strong>Time:</strong> {{timestamp}}</p>
        </div>

        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">{{client_message}}</p>
        </div>

        <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Action Required:</strong></p>
            <p>Please check your admin panel to view and respond to this message.</p>
            <p><a href="https://your-portfolio-url.com/admin" style="color: #2563eb; text-decoration: underline;">Go to Admin Panel</a></p>
        </div>

        <p>Best regards,<br>
        <strong>Portfolio Contact System</strong></p>
    </div>
</body>
</html>
```

3. Save the template and note the **Template ID**

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account"
2. Find your **Public Key** (it will look like a long string)
3. Note it down

## Step 5: Update Environment Variables

Update your `.env.local` file with the actual values:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_CLIENT=template_your_client_template_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN=template_your_admin_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Update Admin Email

In `src/app/page.tsx`, replace `your-admin-email@example.com` with your actual email address:

```typescript
admin_email: 'your-actual-email@example.com', // Replace with your email
```

## Step 7: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check both emails (client confirmation and admin notification)

## Troubleshooting

### Emails not sending?
- Check your EmailJS dashboard for any error messages
- Verify all environment variables are correct
- Make sure your email service is properly connected

### Wrong email content?
- Double-check your template variables match the ones being sent
- Ensure template IDs are correct

### Emails going to spam?
- This is common with automated emails
- Consider using a custom domain for better deliverability

## Security Notes

- Never commit your `.env.local` file to version control
- The public key is safe to expose (it's meant for client-side use)
- Keep your email service credentials secure

## Rate Limits

EmailJS free plan includes:
- 200 emails per month
- 50 emails per day

Consider upgrading for higher limits if needed.