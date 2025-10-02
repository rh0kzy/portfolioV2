# Firebase Functions Email Setup Guide

This guide will help you set up automated email functionality using Firebase Cloud Functions for your portfolio contact form.

## Overview

Instead of client-side email sending (EmailJS), we'll use Firebase Cloud Functions to automatically send emails when someone submits a contact form. This provides:

- ✅ Server-side email sending (more secure)
- ✅ Automatic triggering on new messages
- ✅ Better deliverability
- ✅ No API keys exposed to client
- ✅ Scalable and reliable

## Step 1: Prerequisites

1. **Firebase Project**: You already have this set up
2. **Gmail Account**: For sending emails (you can use other providers too)
3. **Firebase CLI**: Already installed in your project

## Step 2: Set Up Gmail App Password

Since we're using Gmail for sending emails, you need an App Password (not your regular password):

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - **Save the 16-character password** (you'll need it later)

## Step 3: Install Firebase CLI Globally (if not already done)

```bash
npm install -g firebase-tools
```

## Step 4: Login to Firebase

```bash
firebase login
```

## Step 5: Configure Email Settings

Set your email configuration using Firebase CLI:

```bash
# Set your Gmail address
firebase functions:config:set email.user="your-gmail@gmail.com"

# Set your Gmail App Password (the 16-character one)
firebase functions:config:set email.password="your-16-char-app-password"

# Set your admin email (where you'll receive notifications)
firebase functions:config:set email.admin="your-admin-email@example.com"
```

## Step 6: Install Function Dependencies

```bash
cd functions
npm install
cd ..
```

## Step 7: Deploy Firebase Functions

```bash
firebase deploy --only functions
```

This will deploy your `sendContactEmails` function to Firebase.

## Step 8: Update Portfolio URLs

In `functions/index.js`, update these placeholders:

```javascript
// Line 58: Update your portfolio URL
Portfolio: <a href="https://your-portfolio-url.com">your-portfolio-url.com</a>

// Line 59: Update your email
Email: your-email@example.com

// Line 108: Update your portfolio URL
<a href="https://your-portfolio-url.com/admin" style="color: #2563eb; text-decoration: underline;">Go to Admin Panel</a>
```

## Step 9: Test the Setup

1. **Start your Next.js app**:
   ```bash
   npm run dev
   ```

2. **Submit a test message** through your contact form

3. **Check emails**:
   - The client should receive a confirmation email
   - You should receive an admin notification email

4. **Check Firebase Console**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Functions → Logs to see if the function executed successfully

## Alternative Email Providers

If you prefer not to use Gmail, you can modify `functions/index.js` to use other providers:

### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransporter({
  service: 'outlook',
  auth: {
    user: 'your-email@outlook.com',
    pass: 'your-password'
  }
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@your-provider.com',
    pass: 'your-password'
  }
});
```

## Troubleshooting

### Function Deployment Issues
```bash
# Check function logs
firebase functions:log

# Redeploy specific function
firebase deploy --only functions:sendContactEmails
```

### Email Not Sending
1. **Check Firebase Function Logs** for errors
2. **Verify Email Configuration**:
   ```bash
   firebase functions:config:get
   ```
3. **Test Email Settings** manually in the function code

### Emails Going to Spam
- This is common with automated emails
- Consider using a custom domain for better deliverability
- Add SPF/DKIM records to your domain

## Security Best Practices

- ✅ **App Passwords**: Using Gmail App Passwords instead of main password
- ✅ **Server-side**: Email logic runs on Firebase servers, not client
- ✅ **Environment Variables**: Sensitive data stored securely in Firebase config
- ✅ **No API Keys**: No sensitive credentials exposed to frontend

## Cost Considerations

- **Firebase Functions**: First 2 million invocations free per month
- **Email Sending**: Depends on your email provider (Gmail has limits)
- **Firebase Realtime Database**: First 1GB free

## Monitoring & Maintenance

### View Function Performance
```bash
# Check function usage
firebase functions:list

# Monitor errors
firebase functions:log --only sendContactEmails
```

### Update Function
When you modify `functions/index.js`:
```bash
firebase deploy --only functions
```

## Advanced Features (Optional)

### Email Templates
You can create more sophisticated email templates using:
- **Handlebars** for dynamic templating
- **MJML** for responsive email design
- **Email service APIs** (SendGrid, Mailgun) for better deliverability

### Database Triggers
The function currently triggers on new messages. You can also:
- Send follow-up emails
- Update message status
- Send admin summaries

## Support

If you encounter issues:

1. Check [Firebase Functions Documentation](https://firebase.google.com/docs/functions)
2. Review [Nodemailer Documentation](https://nodemailer.com/)
3. Check Firebase Console for detailed error logs

## Next Steps

After setup is complete:
- ✅ Test thoroughly with multiple email addresses
- ✅ Monitor Firebase Console for any issues
- ✅ Consider upgrading to a dedicated email service for production
- ✅ Set up monitoring alerts for function failures