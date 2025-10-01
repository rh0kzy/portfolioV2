# Aymen Belkadi - Portfolio (Next.js)

A modern, responsive portfolio website built with Next.js 15, showcasing projects and skills with a GitHub-inspired design system.

## 🎨 Features

- **Next.js 15**: Built with the latest Next.js features including App Directory and Turbopack
- **TypeScript**: Fully typed for better development experience
- **Responsive Design**: Optimized for all device sizes
- **GitHub-style Design**: Dark theme with authentic GitHub aesthetics
- **Static Generation**: Pre-rendered pages for optimal performance
- **Project Showcase**: 8 detailed project pages with comprehensive information
- **Interactive Components**: Smooth animations and hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rh0kzy/portfolioV2.git
cd portfolioV2/portfolioV2-Next.js
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage
│   ├── project-styles.css   # Project page styles
│   ├── script.js            # Client-side JavaScript
│   ├── styles.css           # Main styles
│   └── projects/            # Individual project pages
│       ├── eden-parfum/
│       ├── file-management/
│       ├── filmflock-cinema/
│       ├── medical-clinic/
│       ├── radiation-analyzer/
│       ├── teacher-management/
│       ├── uno-game/
│       └── vertex-platform/
public/
├── photos/                  # Personal photos and icons
├── projects/                # Project assets and images
├── script.js               # Public JavaScript files
└── project-animations.js   # Animation scripts
```

## 🛠️ Built With

- **Next.js 15** - React framework with App Directory
- **TypeScript** - Type safety and better DX
- **CSS3** - Modern styling with custom properties
- **Font Awesome** - Icon library
- **Inter Font** - Typography

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
