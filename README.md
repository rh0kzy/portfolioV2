# 🚀 Aymen Belkadi - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-12.3.0-orange)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive portfolio website built with Next.js 15, featuring a GitHub-inspired dark theme, real-time GitHub integration, and a comprehensive showcase of projects and skills.

![Portfolio Preview](./public/photos/20250524_001245730_iOS.jpg)

## ✨ Features

### 🎨 Design & UI
- **GitHub-Inspired Design**: Authentic dark theme with GitHub's color scheme and typography
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Glassmorphism Effects**: Modern glass-like UI elements with backdrop blur

### 🚀 Performance
- **Next.js 15**: Latest App Router with Turbopack for fast development
- **Static Generation**: Pre-rendered pages for optimal loading speeds
- **Image Optimization**: Automatic image optimization with Next.js
- **TypeScript**: Full type safety for better development experience

### 🔧 Functionality
- **Real-time GitHub Integration**: Live GitHub statistics and repository data
- **Contact Form**: Firebase-powered contact form for collecting messages
- **Admin Dashboard**: Secure admin panel for managing contact messages
- **Project Showcase**: 8 detailed project pages with images and descriptions
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic content
- **Multi-language Support**: Full French and Arabic translations with RTL support

### 🌍 Multi-language Support
- **French & Arabic**: Complete translations for both languages
- **RTL Support**: Proper right-to-left layout for Arabic text
- **Language Persistence**: Selected language saved in localStorage
- **Auto-detection**: Automatically detects browser language preference

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.0** - Type safety
- **Tailwind CSS 4.0** - Utility-first CSS framework

### Backend & Services
- **Firebase 12.3.0** - Realtime Database & Authentication
- **GitHub API** - Repository and user data integration

### Development Tools
- **ESLint 9** - Code linting
- **Turbopack** - Fast bundler
- **Font Awesome** - Icon library
- **Inter Font** - Modern typography

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+**
- **npm, yarn, pnpm, or bun**
- **GitHub Personal Access Token** (optional, for GitHub integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rh0kzy/portfolioV2.git
   cd portfolioV2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### GitHub API Integration (Optional)

To display real-time GitHub statistics:

1. **Create Personal Access Token**
   - Visit [GitHub Settings > Personal access tokens](https://github.com/settings/tokens)
   - Generate new token (classic)
   - Select scopes: `public_repo`, `read:user`

2. **Environment Setup**
   ```bash
   cp .env.local.example .env.local
   ```

   Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here
   ```

3. **Restart server**
   ```bash
   npm run dev
   ```

### Firebase Setup (Optional)

For contact form functionality:

1. **Create Firebase Project**
   - Visit [Firebase Console](https://console.firebase.google.com/)
   - Create new project

2. **Enable Services**
   - Enable Realtime Database
   - Enable Authentication

3. **Environment Variables**
   Add to `.env.local`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   ```

### Deployment
   ```

## 📖 Usage

### Development
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Project Structure
```
portfolioV2/
├── src/
│   ├── app/
│   │   ├── admin/           # Admin dashboard
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   ├── script.js        # Client-side logic
│   │   └── projects/        # Project detail pages
│   │       ├── [slug]/      # Dynamic routes
│   │       └── */           # Individual projects
│   └── lib/
│       └── firebase.ts      # Firebase configuration
├── public/
│   ├── photos/              # Personal images
│   ├── projects/            # Project screenshots
│   └── favicon.ico          # Site favicon
├── .env.local               # Environment variables
├── next.config.ts           # Next.js configuration
├── tailwind.config.*        # Tailwind CSS config
└── package.json             # Dependencies
```

## 🎯 Features in Detail

### GitHub Integration
- Real-time repository statistics
- Contribution tracking (when available)
- Automated data fetching with error handling
- Fallback data for offline/demo mode

### Contact System
- Firebase-powered contact form
- Email validation and sanitization
- Admin dashboard for message management
- Secure authentication for admin access

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized performance across devices

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code style
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Aymen Belkadi**
- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [@rh0kzy](https://github.com/rh0kzy)
- **Portfolio**: [Live Demo](https://your-portfolio.vercel.app)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment
- **Tailwind CSS** for the utility-first approach
- **Firebase** for backend services
- **GitHub** for the inspiration and API

---

⭐ **Star this repo** if you found it helpful!
