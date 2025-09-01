# Portfolio Deployment Guide for GitHub Pages

This guide explains how to deploy your static HTML/CSS portfolio to GitHub Pages.

## Files Created

- `portfolio.html` - Main HTML file (rename to `index.html` for deployment)
- `portfolio-styles.css` - CSS stylesheet (rename to `styles.css` for deployment)
- This deployment guide

## Quick Setup Instructions

### Step 1: Create Repository
1. Go to GitHub and create a new repository
2. Name it `your-username.github.io` (replace with your actual GitHub username)
3. Make sure it's **public**
4. Initialize with README if desired

### Step 2: Prepare Files
1. Download the `portfolio.html` and `portfolio-styles.css` files
2. Rename `portfolio.html` to `index.html`
3. Rename `portfolio-styles.css` to `styles.css`
4. Update the CSS link in `index.html` from `portfolio-styles.css` to `styles.css`

### Step 3: Upload Files
**Option A: GitHub Web Interface**
1. Go to your repository
2. Click "Add file" > "Upload files"
3. Upload `index.html`, `styles.css`, and this guide
4. Commit changes

**Option B: Git Commands**
```bash
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io
# Copy your files here
git add .
git commit -m "Add portfolio website"
git push origin main
```

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 5: Access Your Site
- Your portfolio will be available at: `https://your-username.github.io`
- May take a few minutes to deploy

## Customization

### Personal Information
Update these sections in `index.html`:
- Hero section: Name, title, description
- Contact information: Email, phone, social links
- Experience section: Add/modify job details
- Projects section: Update with your projects
- Skills section: Modify skills and certifications
- Education section: Update degrees and institutions

### Styling
Modify `styles.css` to customize:
- Colors (CSS variables in `:root` section)
- Fonts and typography
- Layout and spacing
- Animations

### Contact Form
The contact form is currently a demo. To make it functional:
- Use services like Formspree, Netlify Forms, or EmailJS
- Update the form action attribute
- Add JavaScript for form handling

## Features Included

✅ **Fully Responsive Design**
✅ **Mobile-First Approach**
✅ **SEO Optimized HTML**
✅ **Smooth Scrolling Navigation**
✅ **Professional Color Scheme**
✅ **Font Awesome Icons**
✅ **Modern CSS Grid & Flexbox**
✅ **Cross-Browser Compatible**
✅ **Fast Loading**

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips
- All images are optimized for web
- CSS uses efficient selectors
- Minimal JavaScript for better performance
- External resources loaded from CDN

## Troubleshooting

**Site not loading?**
- Check that files are named correctly (`index.html`, `styles.css`)
- Ensure repository is public
- Wait 5-10 minutes for deployment

**Styling not working?**
- Verify CSS file path in HTML
- Check for typos in file names
- Ensure CSS file is uploaded

**Mobile not responsive?**
- Verify viewport meta tag is present
- Check CSS media queries

## Next Steps

1. **Add Real Projects**: Replace placeholder projects with your actual work
2. **Optimize Images**: Add project screenshots and optimize them
3. **Setup Analytics**: Add Google Analytics for visitor tracking
4. **Custom Domain**: Connect a custom domain through GitHub Pages settings
5. **SSL Certificate**: GitHub Pages provides HTTPS automatically

## Support

If you encounter issues:
1. Check GitHub Pages documentation
2. Verify all file names and paths
3. Test locally by opening `index.html` in browser
4. Review browser console for errors

## License

This portfolio template is open source and available under the MIT License.

---

**Remember**: Update all personal information before deploying!