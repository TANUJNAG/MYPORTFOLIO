# Deploy to Render - Step by Step Guide

## Prerequisites
1. GitHub account
2. Render account (free at render.com)

## Step 1: Push to GitHub

First, create a new repository on GitHub:

1. Go to GitHub.com
2. Click "New repository"
3. Name it "tanuj-ai-portfolio"
4. Make it public
5. Don't initialize with README (we already have one)

Then push your code:

```bash
git init
git add .
git commit -m "Initial commit: AI/ML Portfolio"
git branch -M main
git remote add origin https://github.com/TANUJNAG/tanuj-ai-portfolio.git
git push -u origin main
```

## Step 2: Deploy on Render

1. Go to render.com and sign up/login
2. Click "New +" and select "Web Service"
3. Connect your GitHub account
4. Select your repository "tanuj-ai-portfolio"
5. Configure the deployment:

**Build Settings:**
- Name: `tanuj-ai-portfolio`
- Branch: `main`
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Environment: `Node`

**Advanced Settings:**
- Node Version: `20`
- Auto-Deploy: `Yes`

6. Click "Create Web Service"

## Step 3: Get Your Live URL

Once deployed, Render will provide you with a URL like:
`https://tanuj-ai-portfolio.onrender.com`

This will be your live portfolio link!

## Important Notes

- First deployment takes 5-10 minutes
- Free tier may sleep after 15 minutes of inactivity
- Custom domain can be added in paid plans
- All environment variables are automatically set

## Troubleshooting

If deployment fails, check the build logs in Render dashboard for specific errors.

Your portfolio will automatically update when you push changes to GitHub!