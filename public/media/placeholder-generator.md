# Media Placeholder Guide

This directory contains placeholder images for the Alpha Group Investment website. Replace these with actual assets before deployment.

## Required Images

### Hero Section
- `hero-poster.jpg` (1920x1080) - Hero video poster image
- `hero.webm` (1920x1080) - Hero video WebM format
- `hero.mp4` (1920x1080) - Hero video MP4 format

### Content Images
- `advisory-placeholder.jpg` (600x400) - Advisory services illustration
- `investment-approach-placeholder.jpg` (600x400) - Investment approach
- `digital-assets-placeholder.jpg` (600x400) - Digital assets illustration
- `digital-compliance-placeholder.jpg` (600x400) - Compliance framework
- `technical-partners-placeholder.jpg` (600x400) - Technical partnership
- `vision-placeholder.jpg` (600x400) - Vision and innovation
- `advisory-approach-placeholder.jpg` (600x400) - Advisory methodology
- `portfolio-support-placeholder.jpg` (600x400) - Portfolio support
- `partnership-model-placeholder.jpg` (600x400) - Partnership model

### Team Photos (public/team/)
- `michael-placeholder.jpg` (400x400) - Michael Chen headshot
- `sarah-placeholder.jpg` (400x400) - Sarah Rodriguez headshot
- `david-placeholder.jpg` (400x400) - David Kim headshot

### Partner Logos (public/logos/)
- `kinetic.svg` - Kinetic logo
- `okx.svg` - OKX logo
- `anomaly.svg` - The Anomaly Network logo
- `neos.svg` - NeosLegal logo
- `chainforce.svg` - Chainforce.tech logo

### SEO Images
- `og-image.jpg` (1200x630) - Open Graph image for social sharing

## Image Specifications

### Format Guidelines
- Use WebP/AVIF for modern browsers with JPEG fallbacks
- Optimize all images for web (compression without quality loss)
- Use SVG for logos and icons when possible
- Implement responsive images with multiple sizes

### Performance Requirements
- Hero images: < 500KB
- Content images: < 200KB
- Logos: < 50KB
- Team photos: < 100KB

### Accessibility
- All images must have descriptive alt text
- Decorative images should have empty alt attributes
- Ensure sufficient contrast for text overlays

## Placeholder Generation

For development, you can generate placeholder images using:
- https://picsum.photos/ for realistic photos
- https://via.placeholder.com/ for simple colored placeholders
- Figma or Canva for custom branded placeholders

## Video Assets

### Hero Video Requirements
- Duration: 10-30 seconds
- Aspect ratio: 16:9
- No audio (muted autoplay)
- Subtle, professional content
- Optimized for web delivery

### Format Specifications
- WebM (VP9 codec): Primary format for modern browsers
- MP4 (H.264 codec): Fallback for older browsers
- Poster image: High-quality JPEG for video thumbnail

## Implementation Notes

All images are implemented using Next.js Image component with:
- Automatic optimization and format selection
- Lazy loading for performance
- Responsive sizing with srcSet
- Blur placeholder for loading states

Replace placeholders with actual branded assets before production deployment.
