# Jason L. Albano — Portfolio Website

A modern, dark-luxe editorial portfolio website for Jason L. Albano, Data & Business Intelligence Analyst.

## Files

- `index.html` — Main HTML page with all resume content
- `style.css` — Complete stylesheet (dark theme, animations, responsive)
- `main.js` — JavaScript for animations, scroll effects, and interactions
- `README.md` — This file

---

## 🚀 How to Deploy on GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [https://github.com](https://github.com)
2. Click **Sign up** and follow the prompts
3. Verify your email address

---

### Step 2: Create a New Repository
1. After logging in, click the **+** icon in the top-right corner
2. Select **New repository**
3. Fill in the details:
   - **Repository name:** `jason-albano-portfolio` (or your preferred name)
   - **Description:** My professional portfolio website
   - **Visibility:** Public ✅ *(required for free GitHub Pages)*
   - **Do NOT** check "Add a README file" (we already have one)
4. Click **Create repository**

---

### Step 3: Upload Your Files
After creating the repository, you'll see an empty repo page.

**Option A — Upload via Browser (Easiest):**
1. Click **uploading an existing file** (link in the page center)
2. Drag and drop all 4 files into the upload area:
   - `index.html`
   - `style.css`
   - `main.js`
   - `README.md`
3. Scroll down to **Commit changes**
4. Add a commit message: `Initial portfolio upload`
5. Click **Commit changes**

**Option B — Using Git on your computer:**
```bash
# Navigate to the folder containing your files
cd /path/to/your/portfolio-files

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio upload"

# Connect to your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/jason-albano-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 4: Enable GitHub Pages
1. In your repository, click the **Settings** tab (top menu)
2. In the left sidebar, scroll down and click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** and the folder **(root)**
5. Click **Save**

---

### Step 5: Wait & Visit Your Site
1. GitHub will build your site (takes 1–3 minutes)
2. Refresh the Pages settings page
3. You'll see a green banner: **"Your site is live at..."**
4. Your URL will be: `https://YOUR_USERNAME.github.io/jason-albano-portfolio/`

---

## 🌐 Optional: Use a Custom Domain

If you own a domain (e.g., `jasonalbano.com`):

1. In **Settings → Pages**, enter your domain in the **Custom domain** field
2. Click **Save**
3. Log into your domain registrar and add a **CNAME record**:
   - Type: `CNAME`
   - Name: `www`
   - Value: `YOUR_USERNAME.github.io`
4. Also add 4 **A records** pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
5. Check **Enforce HTTPS** in GitHub Pages settings (after DNS propagates, ~24 hrs)

---

## ✏️ Making Updates

To update content later:
1. Edit your files locally
2. Go to your GitHub repo
3. Click the file you want to update
4. Click the **pencil icon** (Edit)
5. Make changes, then click **Commit changes**

Your site will automatically redeploy within 1–2 minutes.

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Animated skill bars
- ✅ Stat counter animations
- ✅ Fixed navigation with scroll effect
- ✅ Mobile hamburger menu
- ✅ No external dependencies beyond Google Fonts
- ✅ Fast loading (pure HTML/CSS/JS)

---

## 🎨 Design Notes

- **Aesthetic:** Dark luxe editorial
- **Fonts:** Cormorant Garamond (display) + DM Sans (body) + DM Mono (labels)
- **Color palette:** Dark ink backgrounds with gold accents
- **Sections:** Hero, About, Experience Timeline, Skills, Certifications, Education, Contact
