# Email Notification Setup Guide

This guide will help you set up email notifications for your portfolio contact form using Nodemailer.

## Prerequisites

- Gmail account for sending emails
- Access to your Gmail account settings

## Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security"
3. Enable "2-Step Verification" if not already enabled

## Step 2: Generate App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security"
3. Under "Signing in to Google", click "App passwords"
4. Select "Mail" as the app and "Windows Computer" (or your device) as the device
5. Click "Generate"
6. Copy the 16-character app password (it will look like: `abcd efgh ijkl mnop`)

## Step 3: Configure Environment Variables

Update your `.env.local` file with your actual email credentials:

```env
# Email Configuration for Nodemailer
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-16-character-app-password
ADMIN_EMAIL=your-admin-email@gmail.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace:
- `your-actual-email@gmail.com` - Your Gmail address that will send the emails
- `your-16-character-app-password` - The app password you generated (remove spaces)
- `your-admin-email@gmail.com` - Your email address where you want to receive notifications

## Step 4: Update Site URL for Production

When you deploy your site, update the `NEXT_PUBLIC_SITE_URL` in your production environment:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## How It Works

When someone submits a contact form:

1. **Message is saved** to Firebase Realtime Database
2. **Admin notification email** is sent to your admin email with:
   - Message details
   - Sender information
   - Link to admin dashboard
   - Timestamp
3. **Confirmation email** is sent to the person who submitted the form with:
   - Thank you message
   - Message summary
   - Link back to your portfolio

## Testing

1. Start your development server: `npm run dev`
2. Fill out the contact form with a test message
3. Check both your admin email and the sender's email for notifications

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**
   - Make sure you're using an app password, not your regular Gmail password
   - Verify 2-factor authentication is enabled

2. **"Connection timeout" error**
   - Check your internet connection
   - Verify EMAIL_HOST and EMAIL_PORT are correct

3. **Emails not being received**
   - Check spam/junk folders
   - Verify email addresses in .env.local are correct
   - Check console for error messages

### Debug Mode

To see detailed email sending logs, check your browser console and terminal output when submitting the form.

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of your main Gmail password
- Consider using a dedicated email account for sending notifications
- Regularly rotate your app passwords for security

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Update NEXT_PUBLIC_SITE_URL to your actual domain
3. Test the email functionality after deployment