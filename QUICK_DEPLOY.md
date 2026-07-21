# 🚀 Quick Deploy to GitHub & Vercel

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `siddhant-portfolio`
3. Description: `Professional portfolio showcasing distributed systems expertise`
4. Make it **Public** (so anyone can see it)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

Run these commands in your terminal:

```bash
cd /Users/I527870/Code/siddhant-portfolio

# Add your GitHub repository as remote
git remote add origin https://github.com/nds0911/siddhant-portfolio.git

# Push your code
git push -u origin main
```

If it asks for credentials, you might need to use a Personal Access Token:
- Go to: https://github.com/settings/tokens
- Generate new token (classic)
- Select `repo` scope
- Use the token as your password

## Step 3: Deploy to Vercel (FREE - 2 minutes)

### Option A: Using Vercel Website (Easiest - No CLI)

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. After signing in, click "Add New..." → "Project"
4. Find `siddhant-portfolio` in your repositories
5. Click "Import"
6. Leave all settings as default (Vercel auto-detects Vite)
7. Click "Deploy"
8. Wait 30 seconds... Done! 🎉

**Your live URL will be**: `https://siddhant-portfolio-nds0911.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login (opens browser to authenticate)
vercel login

# Deploy
vercel --prod
```

## Step 4: Update Your Portfolio URL

Once deployed, update the SEO metadata in `index.html`:

1. Open `/Users/I527870/Code/siddhant-portfolio/index.html`
2. Replace all instances of `https://siddhantrao.dev/` with your Vercel URL
3. Commit and push:
   ```bash
   git add index.html
   git commit -m "Update portfolio URL"
   git push
   ```

Vercel will automatically redeploy!

## Step 5: Add Resume PDF

1. Add your resume PDF to `/Users/I527870/Code/siddhant-portfolio/public/resume.pdf`
2. Commit and push:
   ```bash
   git add public/resume.pdf
   git commit -m "Add resume PDF"
   git push
   ```

---

## ✅ That's It!

Once deployed, you'll have:
- **Portfolio URL**: `https://siddhant-portfolio-nds0911.vercel.app`
- **GitHub Repo**: `https://github.com/nds0911/siddhant-portfolio`
- **Anyone can access** - No login required!

Add this URL to:
- ✉️ Your resume header
- 💼 LinkedIn profile
- 📧 Email signature
- 🎯 Job applications

---

## 🎨 Custom Domain (Optional)

Want `siddhantrao.com` instead of `.vercel.app`?

1. Buy domain from Namecheap/GoDaddy (~$10/year)
2. In Vercel dashboard → Project Settings → Domains
3. Add your custom domain
4. Update DNS records as shown
5. Done! Free SSL included

---

## 🔄 How to Update Later

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel automatically redeploys in 30 seconds!

---

## 🆘 Need Help?

**GitHub push not working?**
- Create repository first: https://github.com/new
- Use Personal Access Token as password if prompted

**Can't deploy to Vercel?**
- Make sure code is pushed to GitHub first
- Use Vercel website method (easier than CLI)

**Want to test before deploying?**
```bash
npm run build
npm run preview
```
Open http://localhost:4173 to see production build

---

## 📞 Your Portfolio Is Ready!

Everything is built and configured. Just:
1. Create GitHub repo
2. Push code
3. Deploy to Vercel (click 3 buttons)
4. Share your URL with recruiters!

**Total time**: 5 minutes ⏱️
