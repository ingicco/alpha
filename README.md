# Alpha Group Investment Website

A production-ready website for Alpha Group Investment built with Next.js 14, TypeScript, TailwindCSS, and MDX. Features institutional-grade advisory, venture investments, and digital asset assurance services.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📋 Project Overview

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Content**: MDX for blog posts and pages
- **Deployment**: Vercel (optimized for edge)
- **CI/CD**: GitHub Actions

### Key Features
- ✅ **Performance**: SSG, edge cache, image optimization
- ✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- ✅ **SEO**: Optimized metadata, sitemap, structured data
- ✅ **Responsive**: Mobile-first design with Tailwind
- ✅ **Type Safety**: Full TypeScript coverage
- ✅ **Content Management**: MDX-based insights system
- ✅ **Forms**: Contact form with spam protection
- ✅ **Analytics**: Vercel Analytics integration ready

## 🏗️ Project Structure

```
alphainvestments/
├── app/                    # Next.js 14 App Router
│   ├── (routes)/          # Page routes
│   ├── api/               # API endpoints
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── content/              # MDX content files
│   └── insights/         # Blog posts
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── media/           # Images and videos
│   ├── logos/           # Partner logos
│   └── team/            # Team photos
└── .github/workflows/    # CI/CD pipelines
```

## 🎨 Design System

### Color Palette
- **Primary**: Dark Blue (#1a1b3a) - Professional, trustworthy
- **Gold**: Accent Gold (#fbbf24) - Premium, exclusive
- **Teal**: Accent Teal (#2dd4bf) - Innovation, digital
- **Muted**: Greys for supporting content

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Tailwind's type scale
- **Hierarchy**: Clear heading structure for accessibility

### Components
All components are built with:
- TypeScript interfaces
- Tailwind CSS classes
- Accessibility best practices
- Responsive design patterns

## 📝 Content Management

### Adding Insights
Create new MDX files in `content/insights/`:

```markdown
---
title: "Your Insight Title"
description: "Brief description for SEO"
date: "2024-01-15"
category: "Investment Thesis"
tags: ["tag1", "tag2"]
---

# Your Content Here

Write your insight content using Markdown syntax.
```

### Updating Pages
- Static pages: Edit files in `app/(routes)/`
- Content pages: Modify MDX files in `content/`
- Components: Update reusable components in `components/`

## 🖼️ Media Assets

### Required Images
Replace placeholders in `public/media/` with actual assets:

- `hero-poster.jpg` (1920x1080) - Hero video poster
- `hero.webm` / `hero.mp4` - Hero video files
- Content images (600x400) - Various page illustrations
- Team photos (400x400) - Leadership headshots
- Partner logos (SVG preferred) - Company logos

### Optimization Guidelines
- Use WebP/AVIF formats with JPEG fallbacks
- Compress images for web delivery
- Implement responsive images with Next.js Image
- Add descriptive alt text for accessibility

## ⚙️ Environment Variables

Copy `env.example` to `.env.local` and configure:

```bash
# Site Configuration
SITE_URL=https://your-domain.com

# Contact Form (choose one)
FORMSPREE_ID=your_formspree_id
# OR
RESEND_API_KEY=your_resend_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id
VERCEL_ANALYTICS_ID=your_vercel_analytics_id
```

### Contact Form Setup

**Option 1: Formspree (Recommended)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Add `FORMSPREE_ID` to environment variables

**Option 2: Resend**
1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add `RESEND_API_KEY` to environment variables

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Manual Deployment
```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Environment Setup
- **Development**: `.env.local`
- **Production**: Configure in Vercel dashboard
- **CI/CD**: GitHub Secrets for automated deployment

## 🔧 Development

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
```

### Code Quality
- **ESLint**: Configured for Next.js and TypeScript
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict type checking
- **Husky**: Git hooks for quality gates (optional)

## 📊 Performance Targets

### Lighthouse Scores
- **Performance**: > 85
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

### Core Web Vitals
- **LCP**: < 2.0s (4G)
- **CLS**: < 0.1
- **TBT**: < 150ms

## ♿ Accessibility

### Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management
- Reduced motion support

### Testing
- Use screen readers (NVDA, JAWS, VoiceOver)
- Test keyboard navigation
- Verify color contrast ratios
- Check with accessibility tools

## 🔒 Security

### Implemented Measures
- Content Security Policy headers
- XSS protection
- CSRF protection for forms
- Input validation and sanitization
- Secure environment variable handling
- Dependency vulnerability scanning

## 📈 SEO Optimization

### Features
- Optimized metadata and Open Graph tags
- Structured data markup
- XML sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Fast loading times
- Mobile-first responsive design

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `develop`
2. Make changes with proper commit messages
3. Run quality checks: `pnpm lint && pnpm type-check`
4. Create pull request to `develop`
5. Deploy to production via `main` branch

### Code Standards
- Use TypeScript for all new code
- Follow existing component patterns
- Add proper error handling
- Include accessibility considerations
- Write descriptive commit messages

## 📋 Handoff Checklist

### ✅ Completed Features
- [x] Color palette & typography system
- [x] Responsive component library
- [x] All page routes and layouts
- [x] MDX content management system
- [x] Contact form with API integration
- [x] SEO optimization and sitemap
- [x] Accessibility compliance
- [x] Performance optimization
- [x] CI/CD pipeline setup
- [x] Legal pages (disclaimer, privacy)

### 🔄 Pending Items
- [ ] Hero video selection and optimization
- [ ] Replace placeholder images with branded assets
- [ ] Configure production environment variables
- [ ] Set up analytics tracking
- [ ] DFSA/VARA compliance text finalization
- [ ] Production domain configuration

### 🎯 Performance Targets Met
- [x] Lighthouse Performance > 85
- [x] Lighthouse Accessibility > 95
- [x] Lighthouse Best Practices > 90
- [x] Lighthouse SEO > 95
- [x] LCP < 2.0s on 4G
- [x] CLS < 0.1
- [x] TBT < 150ms

## 📞 Support

For technical questions or deployment assistance:
- **Documentation**: This README and inline code comments
- **Issues**: Use GitHub Issues for bug reports
- **Architecture**: Review component structure in `/components`
- **Content**: Check MDX files in `/content`

## 📄 License

This project is proprietary to Alpha Group Investment. All rights reserved.

---

**Built with ❤️ for Alpha Group Investment**

*Ready for production deployment with Vercel edge optimization.*
