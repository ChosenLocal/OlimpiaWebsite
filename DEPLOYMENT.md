# Deployment Guide

Complete guide for deploying Olimpia's Biohazard & Restoration website to production.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Vercel Deployment](#vercel-deployment)
- [Environment Variables](#environment-variables)
- [Sanity CMS Setup](#sanity-cms-setup)
- [Domain Configuration](#domain-configuration)
- [Post-Deployment Checklist](#post-deployment-checklist)
- [Monitoring & Maintenance](#monitoring--maintenance)

## Prerequisites

Before deploying, ensure you have:

- [x] GitHub repository with all code
- [x] Vercel account (sign up at vercel.com)
- [x] Sanity.io project created (projectId: 7phj7yjk)
- [x] Twilio account for call bridging (optional for MVP)
- [x] Anthropic API key for chat (optional for MVP)
- [x] Cloudflare Pages for media assets
- [x] Domain registered (olimpiasbiohazard.com)

## Vercel Deployment

### Option 1: Deploy via GitHub (Recommended)

1. **Connect Repository to Vercel**
   ```bash
   # Visit https://vercel.com/new
   # Import your GitHub repository
   # Select: olimpia-website
   ```

2. **Configure Project Settings**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Root Directory: `./`

3. **Set Environment Variables** (see [Environment Variables](#environment-variables))

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Visit your deployment URL

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Deployment Configuration (`vercel.json`)

The project includes a `vercel.json` with:

- **Region**: `pdx1` (Portland, Oregon - closest to target audience)
- **Security Headers**: HSTS, X-Frame-Options, CSP, etc.
- **Redirects**: `/services` → `/` (index page has service grid)
- **Rewrites**: Sitemap and robots.txt dynamic generation
- **Caching**: No cache for API routes, automatic for static assets

## Environment Variables

### Required for MVP

Add these in Vercel Dashboard → Project → Settings → Environment Variables:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=7phj7yjk
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<your_token_here>

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.olimpiasbiohazard.com
NEXT_PUBLIC_BASE_URL=https://www.olimpiasbiohazard.com

# Business Contact
BUSINESS_PHONE=+15035551234
```

### Optional (Add Later)

```bash
# Twilio (for callback feature)
TWILIO_ACCOUNT_SID=<your_sid>
TWILIO_AUTH_TOKEN=<your_token>
TWILIO_PHONE_NUMBER=+15035551234
ON_CALL_PHONE=+15035559999

# Anthropic (for AI chat)
ANTHROPIC_API_KEY=<your_key>

# Email Notifications (optional)
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=<your_user>
SMTP_PASSWORD=<your_password>
NOTIFICATION_EMAIL=info@olimpiasbiohazard.com

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=olimpiasbiohazard.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Getting Environment Variable Values

**Sanity API Token:**
1. Visit https://sanity.io/manage
2. Select your project (7phj7yjk)
3. Go to API → Tokens
4. Create new token with Editor permissions
5. Copy token immediately (shown once)

**Twilio Credentials:**
1. Visit https://console.twilio.com
2. Find Account SID and Auth Token on Dashboard
3. Purchase phone number in Console → Phone Numbers

**Anthropic API Key:**
1. Visit https://console.anthropic.com
2. Go to API Keys
3. Create new key

## Sanity CMS Setup

### 1. Deploy Sanity Studio

```bash
cd /path/to/project
npm run sanity:deploy
```

This deploys Sanity Studio to: `https://7phj7yjk.sanity.studio`

### 2. Import Seed Data

```bash
# Make sure SANITY_API_TOKEN is in .env.local
npm run sanity:import
```

This creates:
- 6 services (EN)
- 2 services (ES)
- 8 cities
- 10 FAQs
- Settings document

### 3. Configure CORS

In Sanity Dashboard → API → CORS Origins, add:
- `https://www.olimpiasbiohazard.com`
- `https://olimpiasbiohazard.com`
- `http://localhost:3000` (for development)

### 4. Add Content Editors

In Sanity Dashboard → Team, invite:
- Content managers
- Marketing team
- Client stakeholders

## Domain Configuration

### 1. Add Domain to Vercel

```bash
# Via Vercel Dashboard
1. Go to Project → Settings → Domains
2. Add domain: olimpiasbiohazard.com
3. Add domain: www.olimpiasbiohazard.com
```

### 2. Configure DNS

In your DNS provider (e.g., Namecheap, GoDaddy, Cloudflare):

**A Records:**
```
Host: @
Type: A
Value: 76.76.21.21
```

**CNAME Records:**
```
Host: www
Type: CNAME
Value: cname.vercel-dns.com
```

**Wait for DNS propagation** (can take 24-48 hours)

### 3. Force HTTPS

In Vercel → Project → Settings → Domains:
- Enable "Force HTTPS"
- Enable "Auto-renew SSL"

## Post-Deployment Checklist

### Immediate (Day 1)

- [ ] Visit site and verify homepage loads
- [ ] Test all navigation links
- [ ] Submit contact form (test lead capture)
- [ ] Test emergency phone CTAs
- [ ] Verify Spanish site works (`/es`)
- [ ] Check all service pages load
- [ ] Test 3-5 service × city pages
- [ ] Verify mobile responsiveness
- [ ] Test on iPhone and Android
- [ ] Check Core Web Vitals in Lighthouse

### Week 1

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Business Profile
- [ ] Verify all meta descriptions
- [ ] Check hreflang tags working
- [ ] Test form submissions go to Sanity
- [ ] Verify email notifications (if configured)
- [ ] Set up Vercel Analytics
- [ ] Configure uptime monitoring

### Week 2-4

- [ ] Monitor search rankings for target keywords
- [ ] Check conversion rate (calls, forms)
- [ ] Review GBP interactions
- [ ] Test callback feature (if Twilio configured)
- [ ] Test AI chat (if Anthropic configured)
- [ ] Review Core Web Vitals trends
- [ ] Check for 404 errors in logs
- [ ] Verify all service × city pages indexed
- [ ] Run accessibility audit
- [ ] Collect initial customer feedback

## Monitoring & Maintenance

### Performance Monitoring

**Vercel Analytics** (Built-in):
- Real User Metrics (RUM)
- Core Web Vitals
- Page load times
- Geographic distribution

**Google Lighthouse CI:**
```bash
# Run locally
npx lighthouse https://www.olimpiasbiohazard.com --view

# Key metrics to monitor:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95
```

**PageSpeed Insights:**
- Run monthly: https://pagespeed.web.dev
- Target: All green scores

### Error Monitoring

**Vercel Logs:**
- Dashboard → Project → Logs
- Filter by errors
- Set up Slack/email alerts

**Sentry (Optional):**
```bash
npm install @sentry/nextjs
# Configure in next.config.js
```

### Uptime Monitoring

**Options:**
- UptimeRobot (free): https://uptimerobot.com
- Pingdom
- StatusCake

Monitor:
- Homepage (/)
- Spanish homepage (/es)
- Contact form page
- Sample service page

### SEO Monitoring

**Google Search Console:**
- Submit sitemap: `https://www.olimpiasbiohazard.com/sitemap.xml`
- Monitor:
  - Indexing status (all 110 pages)
  - Search queries
  - Click-through rates
  - Mobile usability issues
  - Core Web Vitals

**Track Rankings** for:
- "crime scene cleanup Portland"
- "biohazard remediation Milwaukie"
- "unattended death cleanup Oregon"
- "[service] in [city]" combinations

### Backup & Disaster Recovery

**Sanity Backups:**
- Automatic backups every 24 hours
- Manual export: `sanity dataset export production backup.tar.gz`
- Store exports in secure location

**Code Backups:**
- GitHub repository (primary)
- Local clone (secondary)
- Download deployment from Vercel if needed

**Recovery Procedure:**
1. Redeploy from GitHub (instant)
2. Restore Sanity data if needed
3. Reconfigure environment variables
4. Update DNS if switching providers

## Troubleshooting

### Build Failures

**Issue:** Build fails with TypeScript errors
```bash
# Solution: Check types locally
npm run type-check

# Common fixes:
- Update @types packages
- Check for any/unknown usage
- Verify all imports
```

**Issue:** Build fails with missing environment variables
```bash
# Solution: Add to Vercel dashboard
# All NEXT_PUBLIC_* vars must be set
```

### Runtime Errors

**Issue:** 500 errors on API routes
```bash
# Check Vercel logs
# Common causes:
- Missing SANITY_API_TOKEN
- Invalid Twilio credentials
- Rate limiting
```

**Issue:** Images not loading
```bash
# Verify Cloudflare Pages URLs in next.config.js
# Check remotePatterns configuration
```

### Performance Issues

**Issue:** Slow page loads
```bash
# Check:
- Image optimization (AVIF/WebP)
- Bundle size (next build --analyze)
- Database queries (Sanity)
- Third-party scripts
```

**Issue:** High CLS (Cumulative Layout Shift)
```bash
# Solutions:
- Add image dimensions
- Reserve space for dynamic content
- Use font-display: optional
```

## Rollback Procedure

If deployment fails or causes issues:

### Quick Rollback (Vercel)

1. Go to Vercel Dashboard → Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"
4. Deployment switches immediately (< 30 seconds)

### Full Rollback (Git)

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push origin main --force

# Vercel will auto-deploy the reverted code
```

## Support Contacts

**Technical Issues:**
- Vercel Support: https://vercel.com/support
- Sanity Support: https://www.sanity.io/contact/support
- GitHub Issues: Create issue in repository

**Urgent Production Issues:**
- Contact: [Your contact info]
- On-call: [Phone/Slack]
- Response time: < 2 hours

## Next Steps After Deployment

1. **Week 1**: Focus on SEO - submit sitemaps, verify indexing
2. **Week 2**: Monitor analytics - conversion rates, traffic sources
3. **Week 3**: Enable advanced features (Twilio, chat) if ready
4. **Month 1**: Review performance, gather feedback, iterate
5. **Ongoing**: Monthly SEO check, quarterly content updates

---

**Deployment Complete! 🎉**

Visit your live site: https://www.olimpiasbiohazard.com
