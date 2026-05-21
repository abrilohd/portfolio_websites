# 🚀 Vercel Deployment Guide

Quick guide to deploy your AI Engineer Portfolio to Vercel.

---

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- Git installed locally

---

## 🎯 Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub** (Already done ✅)
   ```bash
   git push origin Ai-Engineer
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select the `Ai-Engineer` branch

3. **Configure Build Settings**
   - Framework Preset: **Create React App**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   REACT_APP_ANTHROPIC_API_KEY=your_key_here
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live! 🎉

---

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd portfolio_websites
   vercel --prod
   ```

4. **Follow prompts**
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: portfolio (or your choice)
   - Directory: ./
   - Override settings: No

5. **Add Environment Variables**
   ```bash
   vercel env add REACT_APP_ANTHROPIC_API_KEY
   vercel env add REACT_APP_EMAILJS_SERVICE_ID
   vercel env add REACT_APP_EMAILJS_TEMPLATE_ID
   vercel env add REACT_APP_EMAILJS_PUBLIC_KEY
   ```

6. **Redeploy with env vars**
   ```bash
   vercel --prod
   ```

---

## 🔧 Environment Variables Setup

### Anthropic API (for AI Chat)

1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Create account / Login
3. Go to API Keys
4. Create new key
5. Copy and add to Vercel

### EmailJS (for Contact Form)

1. Visit [emailjs.com](https://emailjs.com)
2. Create account / Login
3. Add Email Service (Gmail, Outlook, etc.)
4. Create Email Template
5. Get credentials:
   - Service ID
   - Template ID
   - Public Key
6. Add to Vercel

**Note**: The contact form works in demo mode without EmailJS (logs to console)

---

## 📋 Vercel Configuration

The project includes `vercel.json` with optimal settings:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "build" }
    }
  ],
  "routes": [
    { "src": "/static/(.*)", "dest": "/static/$1" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads correctly
- [ ] All sections visible
- [ ] Responsive design works (test on mobile)
- [ ] Theme toggle works
- [ ] Navigation works
- [ ] Carousels advance
- [ ] Contact form submits
- [ ] AI chat widget works
- [ ] No console errors

---

## 🔄 Continuous Deployment

Vercel automatically redeploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push origin Ai-Engineer

# Vercel automatically deploys! 🎉
```

---

## 🌐 Custom Domain (Optional)

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Follow DNS configuration instructions

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build fails on Vercel
**Solution**: 
- Check build logs in Vercel dashboard
- Ensure all dependencies in package.json
- Verify Node version (use 18.x)

### Environment Variables Not Working

**Issue**: API keys not working
**Solution**:
- Ensure variables start with `REACT_APP_`
- Redeploy after adding env vars
- Check variable names match exactly

### 404 on Refresh

**Issue**: Page not found when refreshing
**Solution**: 
- Ensure `vercel.json` is present
- Check routes configuration
- Redeploy

### Slow Build

**Issue**: Build takes too long
**Solution**:
- Normal for first build (3-5 minutes)
- Subsequent builds are faster (1-2 minutes)
- Check for large dependencies

---

## 📊 Performance

Expected Vercel deployment metrics:
- Build time: 2-3 minutes
- Bundle size: ~127 KB (gzipped)
- Lighthouse score: 95+
- First load: <2 seconds

---

## 🎉 Success!

Your portfolio is now live on Vercel! 

**Next Steps**:
1. Share your portfolio URL
2. Add to LinkedIn/Resume
3. Monitor analytics in Vercel dashboard
4. Update content as needed

---

## 📞 Support

Need help?
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Email: abrsh067@gmail.com

---

**Happy Deploying!** 🚀
