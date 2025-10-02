# GitHub API Setup Instructions

## 🚀 Quick Setup for Perfect GitHub Data

### Step 1: Create GitHub Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: "Portfolio Website"
4. Select scopes:
   - ✅ `public_repo` (Access public repositories)
   - ✅ `read:user` (Read user profile data)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Add Token to Your Project
1. Open the `.env.local` file in your project root
2. Replace `your_github_token_here` with your actual token:
   ```
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   ```

### Step 3: Restart Development Server
```bash
npm run dev
```

### Step 4: Test Your Data
- Visit your portfolio website
- Check the GitHub stats section
- Data should now be accurate and up-to-date!

## 🔒 Security Notes
- ✅ Your token is stored securely in `.env.local`
- ✅ `.env.local` is in `.gitignore` (won't be committed)
- ✅ Token only has read-only access to public data
- ✅ You can revoke the token anytime from GitHub settings

## 🎯 What You'll Get
- ✅ Real contribution counts
- ✅ Accurate repository statistics
- ✅ Current follower/following counts
- ✅ Live GitHub activity data
- ✅ No more rate limiting issues

**Need help?** Check the README.md for detailed instructions!