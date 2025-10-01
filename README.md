# Aymen Belkadi - Portfolio

This repository contains my personal portfolio website showcasing my projects and skills.

## ⚠️ IMPORTANT: This version has been migrated to Next.js

**The active portfolio is now in the `portfolioV2-Next.js` folder.**

🚀 **To run the portfolio:**
```bash
cd portfolioV2-Next.js
npm install
npm run dev
```

## 📁 Repository Structure

- **`portfolioV2-Next.js/`** - ✅ **Active Next.js version** (Modern, optimized)
- **`GITHUB_VERIFICATION_REPORT.md`** - GitHub verification report
- **`.git/`** - Git repository data

## 🔄 Migration Completed

The original HTML/CSS/JS portfolio has been successfully migrated to:
- ✅ **Next.js 15** with App Directory
- ✅ **TypeScript** for type safety  
- ✅ **Static Site Generation** for performance
- ✅ **8 detailed project pages** with full content
- ✅ **Responsive design** optimized for all devices
- ✅ **Modern development workflow**

## 🌐 Live Demo

Visit the portfolio at: [your-domain.com](https://your-domain.com)

## 📞 Contact

- **Email**: aymen.belkadi.contact@gmail.com
- **GitHub**: [@rh0kzy](https://github.com/rh0kzy)
- **LinkedIn**: [Aymen Belkadi](https://linkedin.com/in/aymen-belkadi)
2. **Customize** the content in `index.html` with your information
3. **Replace placeholder images** with your actual photos/screenshots
4. **Open** `index.html` in your browser

## 📁 Project Structure

```
portfolioV2/
├── index.html          # Main HTML file
├── styles.css          # GitHub-themed CSS styles
├── script.js           # Interactive JavaScript features
└── README.md          # This file
```

## 🛠️ Customization Guide

### Personal Information
Edit the following sections in `index.html`:

1. **Profile Section** (Line ~35):
   ```html
   <h1 class="profile-name">Your Name</h1>
   <p class="profile-username">@yourusername</p>
   <p class="profile-bio">Your bio here...</p>
   ```

2. **Contact Information** (Line ~50):
   ```html
   <div class="detail-item">
       <i class="fas fa-envelope"></i>
       <span>your.email@example.com</span>
   </div>
   ```

3. **Social Links** (Line ~65):
   ```html
   <a href="https://github.com/yourusername" class="social-link">
   ```

### Repository Cards
Update the repository information (Line ~120):
```html
<div class="repo-card">
    <div class="repo-header">
        <h3 class="repo-name">
            <i class="fas fa-book"></i>
            your-project-name
        </h3>
    </div>
    <p class="repo-description">Project description...</p>
    <!-- Update language, stars, forks -->
</div>
```

### Project Showcase
Replace project information (Line ~200):
```html
<div class="project-card">
    <div class="project-image">
        <img src="path-to-your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
        </div>
    </div>
</div>
```

### Skills Section
Update your technical skills (Line ~300):
```html
<div class="skill-category">
    <h4>Category Name</h4>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

## 🎨 Design System

This portfolio uses GitHub's official design tokens:

### Colors
- **Primary Background**: `#0d1117`
- **Secondary Background**: `#161b22`
- **Text Primary**: `#e6edf3`
- **Text Secondary**: `#7d8590`
- **Accent Blue**: `#58a6ff`
- **Border**: `#30363d`

### Typography
- **Font Family**: Inter (with GitHub fallbacks)
- **Font Sizes**: 12px - 26px scale
- **Font Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: GitHub-style primary and outline variants
- **Cards**: Repository and project cards with hover effects
- **Forms**: Styled inputs and textareas
- **Navigation**: Sticky header with smooth scrolling

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and up
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ✨ Interactive Features

### JavaScript Enhancements
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Active Navigation**: Highlights current section in navigation
- **Repository Search**: Filter repositories by name or language
- **Contribution Graph**: Generates a GitHub-style activity graph
- **Form Handling**: Contact form validation and submission
- **Scroll Animations**: Elements animate into view on scroll
- **Ripple Effects**: Button click animations
- **Scroll to Top**: Floating button appears on scroll

### Easter Eggs
- **Konami Code**: Try the classic cheat code sequence!
- **Console Messages**: Check the browser console for developer messages

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📦 Dependencies

### External Libraries
- **Font Awesome 6.0.0**: Icons
- **Google Fonts (Inter)**: Typography

### No Framework Dependencies
This portfolio is built with vanilla web technologies:
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- ES6+ JavaScript

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML section to `index.html`
2. Add corresponding styles to `styles.css`
3. Update navigation in header
4. Add scroll behavior in `script.js`

### Modifying Colors
Update CSS custom properties in `:root` selector:
```css
:root {
    --bg-primary: #your-color;
    --text-primary: #your-color;
    /* ... other variables */
}
```

### Adding Animations
Use the existing animation classes or create new ones:
```css
@keyframes yourAnimation {
    from { /* start state */ }
    to { /* end state */ }
}
```

## 📈 Performance

- **Lightweight**: ~50KB total size
- **Fast Loading**: Optimized images and minimal dependencies
- **Smooth Animations**: 60fps animations with CSS transforms
- **Responsive Images**: Placeholder service for development

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Netlify
1. Connect repository to Netlify
2. Build command: (none needed)
3. Publish directory: `/` (root)

### Vercel
1. Import repository to Vercel
2. Deploy with zero configuration

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this portfolio template!

## 📞 Support

If you need help customizing this portfolio, please:
1. Check this README first
2. Look at the code comments in the files
3. Open an issue on GitHub

---

**Made with ❤️ and GitHub's design system**
