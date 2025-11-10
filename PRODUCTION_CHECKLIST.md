# Production Launch Checklist

Complete checklist for launching Olimpia's Biohazard & Restoration website to production.

## Pre-Launch Checklist

### Code & Build
- [ ] All tests passing (`npm test`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Production build successful (`npm run build`)
- [ ] All 110 routes generate successfully
- [ ] Bundle size reasonable (< 300KB initial load)
- [ ] No console errors in browser
- [ ] All git branches merged to main
- [ ] Latest code pushed to GitHub

### Content & CMS
- [ ] Sanity Studio deployed
- [ ] All services content added (6 EN + 2 ES minimum)
- [ ] All FAQ content added (8 EN + 2 ES minimum)
- [ ] Cities configured (8 minimum)
- [ ] Settings document configured (phone, email, address)
- [ ] Testimonials added (optional but recommended)
- [ ] All content proofread and approved
- [ ] Spanish translations verified by native speaker
- [ ] Images optimized and uploaded to Cloudflare Pages
- [ ] No placeholder text remaining

### Environment Variables
- [ ] NEXT_PUBLIC_SANITY_PROJECT_ID set
- [ ] NEXT_PUBLIC_SANITY_DATASET set
- [ ] SANITY_API_TOKEN set (with write permissions)
- [ ] NEXT_PUBLIC_SITE_URL set to production domain
- [ ] NEXT_PUBLIC_BASE_URL set to production domain
- [ ] BUSINESS_PHONE set to real number
- [ ] All optional services configured (Twilio, Anthropic) or disabled

### SEO & Meta
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Open Graph images configured
- [ ] Twitter Card meta tags present
- [ ] Canonical URLs set correctly
- [ ] Hreflang tags for EN/ES pages
- [ ] Robots.txt allows indexing
- [ ] Sitemap.xml generates correctly
- [ ] No duplicate content issues
- [ ] Structured data (Schema.org) implemented

### Accessibility (WCAG 2.2 AA)
- [ ] All images have alt text
- [ ] Form labels properly associated
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets AA standards
- [ ] Heading hierarchy correct (single H1 per page)
- [ ] ARIA labels where needed
- [ ] No accessibility errors in Lighthouse
- [ ] Tested with screen reader (optional but recommended)

### Performance
- [ ] Lighthouse Performance score > 90
- [ ] Core Web Vitals pass:
  - [ ] LCP < 2.5s
  - [ ] FID/INP < 100ms
  - [ ] CLS < 0.1
- [ ] Images lazy-loaded
- [ ] Images in modern formats (AVIF/WebP)
- [ ] Fonts optimized (preload, font-display)
- [ ] No render-blocking resources
- [ ] JavaScript bundles code-split

### Security
- [ ] HTTPS enforced
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] No sensitive data in client code
- [ ] Environment variables secure
- [ ] API routes have rate limiting
- [ ] Form submission validation (client + server)
- [ ] SQL injection prevention (N/A - using Sanity)
- [ ] XSS prevention (React auto-escaping)
- [ ] CORS configured correctly

### Functional Testing
- [ ] Homepage loads correctly (EN)
- [ ] Homepage loads correctly (ES)
- [ ] All navigation links work
- [ ] Language toggle works
- [ ] Contact form submits successfully
- [ ] Form validation works
- [ ] Phone CTAs work (tel: links)
- [ ] All 6 service detail pages load
- [ ] Service × city pages load (test 10+ random combinations)
- [ ] About page loads (EN/ES)
- [ ] Contact page loads (EN/ES)
- [ ] 404 page shows for invalid URLs
- [ ] Breadcrumb navigation works
- [ ] Footer links work
- [ ] Mobile menu works
- [ ] FAQ accordion expands/collapses

### Browser Testing
- [ ] Chrome (Desktop) - latest
- [ ] Firefox (Desktop) - latest
- [ ] Safari (Desktop) - latest
- [ ] Edge (Desktop) - latest
- [ ] Chrome (Mobile) - Android
- [ ] Safari (Mobile) - iOS
- [ ] Responsive design works (320px - 1920px)

### Mobile Testing
- [ ] Touch targets adequate size (44x44px minimum)
- [ ] Text readable without zoom
- [ ] No horizontal scroll
- [ ] Forms usable on mobile
- [ ] Phone CTAs work on mobile
- [ ] Navigation menu functional
- [ ] Images sized appropriately

### Monitoring Setup
- [ ] Vercel Analytics enabled
- [ ] Error logging configured
- [ ] Uptime monitoring setup
- [ ] Google Search Console added
- [ ] Google Analytics setup (optional)
- [ ] Plausible Analytics setup (optional)

### Third-Party Integrations
- [ ] Twilio configured (or disabled gracefully)
- [ ] Anthropic API configured (or disabled gracefully)
- [ ] Email notifications working (or disabled)
- [ ] Cloudflare Pages media loading correctly
- [ ] Sanity CMS connection working
- [ ] No broken external links

### Legal & Compliance
- [ ] Privacy policy page (create if needed)
- [ ] Terms of service page (create if needed)
- [ ] Cookie consent (if using analytics)
- [ ] GDPR compliance (if applicable)
- [ ] CCPA compliance (California users)
- [ ] Contact information accurate
- [ ] Business licenses verified
- [ ] Certifications verified (OSHA, EPA)

## Launch Day Checklist

### Deploy to Production
- [ ] Merge final PR to main branch
- [ ] Verify build passes on Vercel
- [ ] Review deployment preview
- [ ] Promote to production
- [ ] Verify production URL loads

### DNS & Domain
- [ ] DNS records configured correctly
- [ ] Domain points to Vercel
- [ ] www subdomain redirects to apex (or vice versa)
- [ ] SSL certificate active
- [ ] HTTPS enforced
- [ ] DNS propagation complete (check globally)

### Post-Deploy Verification
- [ ] Homepage loads at production URL
- [ ] Test 3-5 random pages manually
- [ ] Submit test contact form
- [ ] Test phone CTAs
- [ ] Verify analytics tracking
- [ ] Check for any JavaScript errors
- [ ] Verify images loading
- [ ] Test on mobile device

### SEO Activation
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Request indexing for homepage
- [ ] Verify robots.txt allows crawling
- [ ] Check Google Search for existing pages (site:domain.com)

### Google Business Profile
- [ ] Create/claim GBP listing
- [ ] Add business information
- [ ] Upload photos
- [ ] Add service areas (8 cities)
- [ ] Add services offered
- [ ] Add business hours (24/7)
- [ ] Add phone number
- [ ] Add website URL

### Social Media (Optional)
- [ ] Update Facebook business page
- [ ] Update Instagram bio link
- [ ] Update LinkedIn company page
- [ ] Add Open Graph preview

## Week 1 Monitoring

### Daily Checks
- [ ] Site uptime (should be 100%)
- [ ] Form submissions working
- [ ] Phone calls coming in
- [ ] No 500 errors in logs
- [ ] Core Web Vitals stable

### Analytics Review
- [ ] Traffic sources
- [ ] Page views (top pages)
- [ ] Bounce rate
- [ ] Average session duration
- [ ] Conversion rate (form/call)
- [ ] Mobile vs desktop split
- [ ] Browser breakdown
- [ ] Geographic distribution

### SEO Monitoring
- [ ] Indexing status (pages indexed/submitted)
- [ ] Search impressions
- [ ] Click-through rate
- [ ] Average position
- [ ] Top queries
- [ ] Mobile usability issues
- [ ] Core Web Vitals in GSC

## Month 1 Review

### Performance Review
- [ ] Lighthouse scores maintained
- [ ] Core Web Vitals passing
- [ ] Page load times acceptable
- [ ] No performance regressions

### Conversion Review
- [ ] Call volume vs expectations
- [ ] Form submissions vs expectations
- [ ] Service page views
- [ ] Service × city page performance
- [ ] Spanish site usage

### SEO Review
- [ ] All 110 pages indexed
- [ ] Rankings for target keywords
- [ ] Organic traffic growth
- [ ] Keyword opportunities
- [ ] Backlink acquisition

### Content Updates Needed
- [ ] Add more testimonials
- [ ] Expand service descriptions
- [ ] Add blog posts (if planned)
- [ ] Update seasonal content
- [ ] Add more FAQs based on inquiries

### Technical Improvements
- [ ] Review error logs
- [ ] Fix any bugs reported
- [ ] Optimize slow pages
- [ ] Update dependencies
- [ ] Address security advisories

## Rollback Plan

If critical issues occur post-launch:

### Immediate (< 5 minutes)
1. [ ] Go to Vercel Dashboard → Deployments
2. [ ] Find last stable deployment
3. [ ] Click "Promote to Production"
4. [ ] Verify site restored

### If DNS Issues
1. [ ] Revert DNS records
2. [ ] Wait for propagation (use 1.1.1.1 for testing)
3. [ ] Update Vercel domain settings

### If Sanity Issues
1. [ ] Check API token validity
2. [ ] Verify CORS settings
3. [ ] Restore from backup if needed
4. [ ] Redeploy Sanity Studio

## Support Contacts

**Emergency Support:**
- Developer: [Contact]
- Hosting (Vercel): https://vercel.com/support
- CMS (Sanity): https://www.sanity.io/contact/support
- DNS Provider: [Provider support]

**Response Time Targets:**
- Critical (site down): < 1 hour
- High (broken feature): < 4 hours
- Medium (minor bug): < 24 hours
- Low (enhancement): Next sprint

## Success Criteria

**Week 1:**
- ✅ Site stable with 99.9% uptime
- ✅ At least 3 form submissions or calls
- ✅ No critical bugs
- ✅ Core Web Vitals passing

**Month 1:**
- ✅ 100+ organic visitors
- ✅ 10+ leads generated
- ✅ Top 10 for primary keyword
- ✅ All pages indexed

**Month 3:**
- ✅ Top 3 for 3+ keywords
- ✅ 500+ organic visitors
- ✅ 30+ leads generated
- ✅ Positive ROI

---

**Ready to Launch! 🚀**

Use this checklist to ensure a smooth, successful deployment.
