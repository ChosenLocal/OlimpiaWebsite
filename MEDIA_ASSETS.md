# Media Assets - Cloudflare Pages

## Overview

Website images and media assets are hosted on Cloudflare Pages for optimal performance and global CDN delivery.

## Cloudflare Configuration

### Project Details
- **Project Name:** olimpias-ideogram-batch
- **Production URL:** https://olimpias-ideogram-batch.pages.dev
- **Deployment URL:** https://1c7270e2.olimpias-ideogram-batch.pages.dev
- **Assets:** 291 files (355MB of images)
- **Wrangler CLI Version:** 4.46.0

### Uploaded Content
The batch includes images generated via Ideogram for:
- Service page hero images
- Background textures
- Icons and graphics
- OG (Open Graph) images for social sharing

## Usage in Next.js

### Image Component
Use Next.js Image component with Cloudflare URLs:

\`\`\`tsx
import Image from 'next/image'

<Image
  src="https://olimpias-ideogram-batch.pages.dev/images/crime-scene-hero.jpg"
  alt="Crime scene cleanup service"
  width={1200}
  height={630}
  priority
/>
\`\`\`

### Configured Domains
The following domains are whitelisted in `next.config.js`:
- `cdn.sanity.io` (for CMS images)
- `1c7270e2.olimpias-ideogram-batch.pages.dev` (deployment-specific)
- `olimpias-ideogram-batch.pages.dev` (production)

## Image Optimization

### Formats
Next.js automatically serves optimized formats:
- **AVIF** (modern browsers, best compression)
- **WebP** (fallback for wider support)
- **JPEG/PNG** (legacy fallback)

### Sizes
Define responsive sizes for better performance:

\`\`\`tsx
<Image
  src="..."
  alt="..."
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
\`\`\`

## Asset Structure

Recommended organization on Cloudflare Pages:

\`\`\`
/images/
  /services/
    crime-scene-hero.jpg
    biohazard-hero.jpg
    unattended-death-hero.jpg
    water-damage-hero.jpg
    fire-damage-hero.jpg
    hoarding-hero.jpg
  /og/
    default.jpg
    crime-scene.jpg
    ...
  /icons/
    logo.svg
    service-icons.svg
  /backgrounds/
    hero-bg.jpg
    texture.png
\`\`\`

## Deployment Workflow

### Upload New Images

1. **Via Wrangler CLI:**
   \`\`\`bash
   npx wrangler pages deploy ./public/images --project-name=olimpias-ideogram-batch
   \`\`\`

2. **Via Cloudflare Dashboard:**
   - Navigate to Pages project
   - Upload files manually
   - Each deployment gets unique URL

### Update Image References

After uploading new images:
1. Update image URLs in code/CMS
2. Clear any caches if needed
3. Test in preview deployment first
4. Promote to production

## Performance Considerations

### CDN Caching
- Cloudflare CDN automatically caches images globally
- First request: served from origin
- Subsequent requests: served from nearest edge location
- Cache duration: managed by Cloudflare

### Lazy Loading
Use lazy loading for below-the-fold images:

\`\`\`tsx
<Image
  src="..."
  alt="..."
  loading="lazy" // Default for images not marked priority
/>
\`\`\`

### Priority Images
Mark above-the-fold images as priority:

\`\`\`tsx
<Image
  src="..."
  alt="..."
  priority // Loads immediately, no lazy loading
/>
\`\`\`

## Best Practices

### Image Specifications
- **Hero images:** 1920×1080px minimum (16:9 ratio)
- **Service cards:** 800×600px (4:3 ratio)
- **OG images:** 1200×630px (exact size for social sharing)
- **Thumbnails:** 400×300px
- **Format:** JPEG (photos), PNG (graphics with transparency), WebP (modern)
- **Compression:** 80-85% quality for photos

### Alt Text Guidelines
- Descriptive and specific
- Include service type and location when relevant
- Don't start with "Image of" or "Picture of"
- Keep under 125 characters

Example:
\`\`\`
Good: "Professional crime scene cleanup technician in protective gear"
Bad: "Image of technician"
\`\`\`

### Accessibility
- All images must have alt text
- Decorative images should use `alt=""`
- Complex images should have longer descriptions nearby

## Troubleshooting

### Images Not Loading

**Check:**
1. URL is correct and accessible
2. Domain is whitelisted in `next.config.js`
3. Cloudflare Pages deployment is live
4. No CORS issues (should be automatic with Cloudflare)

**Common Issues:**
- **404:** Image path incorrect
- **403:** Domain not whitelisted
- **Slow loading:** Check image size, optimize if >500KB

### Optimization Not Working

**Verify:**
1. Using Next.js `<Image>` component (not `<img>` tag)
2. Width and height specified
3. Remote patterns configured in next.config.js

## Monitoring

### Cloudflare Analytics
View image delivery metrics in Cloudflare Dashboard:
- Total requests
- Bandwidth usage
- Cache hit rate
- Geographic distribution

### Next.js Image Metrics
Monitor in production:
- LCP (Largest Contentful Paint) - target <2.5s
- CLS (Cumulative Layout Shift) - target <0.1
- Image load times

## Future Enhancements

Consider implementing:
- [ ] Image transformation API (resize on-the-fly)
- [ ] Automatic WebP conversion
- [ ] Blurred placeholders for better UX
- [ ] Responsive image sets
- [ ] Art direction with `<picture>` element

## Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web.dev Image Guide](https://web.dev/fast/#optimize-your-images)
