# Netlify Deployment Guide with Email Functionality

This guide will help you deploy your portfolio to Netlify with working email notifications.

## Step 1: Prepare Your Repository

Make sure your latest changes are committed and pushed to GitHub:

```bash
git add .
git commit -m "Add Netlify email function and configuration"
git push origin main
```

## Step 2: Deploy to Netlify

### Option A: Connect GitHub Repository (Recommended)

1. Go to [Netlify](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose GitHub and authorize Netlify
4. Select your `portfolioV2` repository
5. Use these build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Functions directory**: `netlify/functions` (auto-detected)

### Option B: Manual Deploy

1. Run `npm run build` locally
2. Drag and drop the `out` folder to Netlify

## Step 3: Configure Environment Variables

In your Netlify dashboard:

1. Go to **Site settings** → **Environment variables**
2. Add these variables:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=portfolioaymen@gmail.com
EMAIL_PASS=xddc jktj ocph fzku
ADMIN_EMAIL=aymenbelkadi1012005@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-site-name.netlify.app
```

**Important**: Replace `your-site-name.netlify.app` with your actual Netlify URL.

## Step 4: Update Your Site URL

After deployment:

1. Copy your Netlify site URL (e.g., `https://amazing-portfolio-123.netlify.app`)
2. Update the `NEXT_PUBLIC_SITE_URL` environment variable
3. Redeploy the site (Netlify will auto-redeploy when you change env vars)

## Step 5: Test Email Functionality

1. Visit your deployed site
2. Fill out the contact form with test data
3. Check both:
   - Your admin email (`aymenbelkadi1012005@gmail.com`)
   - The test sender's email for confirmation

## How It Works on Netlify

### Local Development
- Uses Next.js API route: `/api/send-email`
- Runs on your local server

### Netlify Production
- Uses Netlify Function: `/.netlify/functions/send-email`
- Automatically redirected from `/api/send-email` via `netlify.toml`

## Troubleshooting

### 1. Function Not Found (404 Error)
- Check that `netlify/functions/send-email.js` exists
- Verify `netlify.toml` configuration
- Redeploy the site

### 2. Email Not Sending
- Check Netlify Function logs in your dashboard
- Verify environment variables are set correctly
- Check Gmail app password is correct

### 3. CORS Issues
- The function includes proper CORS headers
- If issues persist, check browser console for specific errors

### 4. Build Failures
- Ensure all dependencies are in `package.json`
- Check Netlify build logs for specific errors

## Viewing Function Logs

To debug email issues:

1. Go to Netlify Dashboard → **Functions**
2. Click on `send-email` function
3. View logs to see any errors

## Security Notes

- Environment variables are secure in Netlify
- Never commit `.env.local` to GitHub
- Your Gmail app password is safely stored in Netlify's environment

## Custom Domain (Optional)

If you have a custom domain:

1. Add it in Netlify: **Domain settings** → **Add custom domain**
2. Update `NEXT_PUBLIC_SITE_URL` to your custom domain
3. Redeploy

## Performance

- Netlify Functions have a cold start time (~100-500ms)
- Email sending typically takes 1-3 seconds
- Users get immediate feedback while emails send in background

Your email notification system will now work seamlessly on Netlify! 🚀