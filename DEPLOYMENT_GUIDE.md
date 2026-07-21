# 🚀 Deploy Your Portfolio - Easy Guide

Your portfolio is ready to deploy! Choose one of these FREE hosting options (no login required for visitors):

---

## ⭐ OPTION 1: Vercel (Recommended - Easiest)

### What You Get:
- ✅ FREE forever
- ✅ Custom domain support (yourname.vercel.app)
- ✅ Automatic HTTPS
- ✅ Anyone can access via URL (no login needed)
- ✅ Global CDN (fast worldwide)
- ✅ Auto-deploy on git push

### Steps to Deploy:

1. **Push to GitHub** (if not already done):
   ```bash
   # Create a new repository on GitHub first (github.com/new)
   # Then run:
   git remote add origin https://github.com/YOUR-USERNAME/siddhant-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   
   **Method A: Using Vercel Website (No CLI needed)**
   - Go to https://vercel.com
   - Click "Sign Up" (use your GitHub account)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! You'll get a URL like: `https://siddhant-portfolio.vercel.app`

   **Method B: Using CLI**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login (opens browser)
   vercel login
   
   # Deploy
   vercel
   
   # Follow the prompts:
   # - Set up and deploy? Yes
   # - Which scope? Select your account
   # - Link to existing project? No
   # - Project name? siddhant-portfolio
   # - Directory? ./ (press Enter)
   # - Override settings? No
   
   # For production deployment:
   vercel --prod
   ```

3. **Get Your URL**:
   - Your portfolio will be live at: `https://siddhant-portfolio-YOUR-USERNAME.vercel.app`
   - You can customize this URL in Vercel settings
   - Add this URL to your resume and LinkedIn!

---

## 🟦 OPTION 2: Netlify (Also Great)

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to https://netlify.com
   - Click "Sign up" (use GitHub)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"
   - Done! URL: `https://siddhant-portfolio.netlify.app`

---

## 🐙 OPTION 3: GitHub Pages (Free, Requires GitHub)

### Steps:

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** (add these lines):
   ```json
   {
     "homepage": "https://YOUR-USERNAME.github.io/siddhant-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   # Push to GitHub first
   git remote add origin https://github.com/YOUR-USERNAME/siddhant-portfolio.git
   git branch -M main
   git push -u origin main
   
   # Deploy to GitHub Pages
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Save
   - URL: `https://YOUR-USERNAME.github.io/siddhant-portfolio`

---

## 🎯 After Deployment Checklist

Once deployed, update these:

1. **Update SEO URLs in `index.html`**:
   - Replace all `https://siddhantrao.dev/` with your actual URL
   - Lines to update: og:url, twitter:url, canonical link

2. **Test Your Portfolio**:
   - ✅ Open the URL in incognito mode (test public access)
   - ✅ Test on mobile
   - ✅ Click all links (LinkedIn, GitHub, Email)
   - ✅ Download resume button (add PDF to `/public/resume.pdf` if not done)
   - ✅ Test on different browsers

3. **Share Your URL**:
   - Add to resume header
   - Add to LinkedIn profile summary
   - Add to email signature
   - Use in job applications

---

## 🔧 Quick Commands Reference

```bash
# Local development
npm run dev              # Start dev server at localhost:5173

# Build for production
npm run build            # Creates dist/ folder

# Preview production build
npm run preview          # Test production build locally

# Deploy to Vercel
vercel --prod            # Deploy to production

# Deploy to Netlify (if using CLI)
netlify deploy --prod    # Deploy to production

# Deploy to GitHub Pages
npm run deploy           # Deploy to gh-pages branch
```

---

## 💡 Custom Domain (Optional)

Once deployed, you can add a custom domain like `siddhantrao.dev`:

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel/Netlify dashboard:
   - Go to your project settings
   - Add custom domain
   - Follow DNS configuration steps
3. Update `index.html` with your custom domain

---

## 🆘 Troubleshooting

**Build fails?**
- Run `npm run build` locally to see errors
- Check that all TypeScript errors are fixed
- Ensure all imports are correct

**404 on refresh?**
- Vercel/Netlify handle this automatically
- For GitHub Pages, you might need a 404.html redirect

**Images not loading?**
- Check file paths are correct
- Ensure images are in `/public` folder
- Use relative paths

**Resume download not working?**
- Add `resume.pdf` to `/public/resume.pdf`
- Rebuild and redeploy

---

## 📊 Which Option Should I Choose?

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| **Ease of use** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Speed** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Custom domain** | Free | Free | Free |
| **Auto-deploy** | Yes | Yes | Manual |
| **Analytics** | Built-in | Built-in | No |

**Recommendation**: Start with **Vercel** - it's the easiest and fastest!

---

## ✅ You're Ready!

Your portfolio is built and ready to deploy. Pick one option above and follow the steps. In 5 minutes, you'll have a live URL to share with recruiters!

**Questions?** The build is ready in the `dist/` folder. Just pick a hosting platform and deploy!
