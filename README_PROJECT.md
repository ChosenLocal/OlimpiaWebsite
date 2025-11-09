# Olimpia's Biohazard & Restoration Website

Professional, bilingual (EN/ES) emergency response website for biohazard cleanup and restoration services in Portland Metro area.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **CMS:** Sanity (headless)
- **Call Integration:** Twilio (for call bridging)
- **Testing:** Playwright
- **Hosting:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Sanity account (for CMS)
- Twilio account (for call features)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env.local` and configure your environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables with your actual credentials

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Run Sanity Studio (CMS):
```bash
npm run sanity
```

Open [http://localhost:3000/studio](http://localhost:3000/studio) to access the CMS.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run Playwright tests
- `npm run sanity` - Start Sanity Studio
- `npm run sanity:deploy` - Deploy Sanity Studio

## Project Structure

```
/app                    # Next.js App Router
  /(en)                 # English routes
  /(es)                 # Spanish routes
  /services/[slug]      # Dynamic service pages
  /service-area/[city]  # Dynamic city pages
  /api                  # API routes
/components             # React components
  /ui                   # UI components
  /sections             # Page sections
/lib                    # Utility functions
  /seo.ts              # SEO utilities
  /schema.ts           # Schema.org generators
  /sanity.ts           # Sanity client
  /validators.ts       # Form validation
/sanity                 # Sanity CMS
  /schemas             # Content schemas
/public                # Static assets
/styles                # Global styles
/tests                 # Playwright tests
```

## Key Features

- ✅ Bilingual (EN/ES) with language toggle
- ✅ Emergency CTAs (Call Now / Call Me Now)
- ✅ Twilio call bridging for instant callbacks
- ✅ Chat triage system
- ✅ SEO/AEO/GEO optimized
- ✅ Structured data (Schema.org)
- ✅ WCAG 2.2 AA accessibility
- ✅ Mobile-first responsive design
- ✅ Core Web Vitals optimized

## Documentation

Comprehensive documentation is available in the project directories:

- `/01-PRD` - Product requirements & business goals
- `/02-IA-Sitemap` - Site architecture & navigation
- `/03-UX` - User experience flows
- `/04-Content` - Content structure & templates
- `/05-Design` - Design system & brand tokens
- `/06-SEO-AEO-GEO` - Search optimization strategy
- `/07-Tech` - Technical specifications
- `/08-APIs` - API specifications
- `/09-CMS` - Content management system
- `/10-Analytics` - Analytics & tracking
- `/11-Testing-QA` - Testing checklist
- `/12-Launch` - Launch preparation
- `/13-Post-Launch` - Growth strategy
- `/14-Legal` - Legal & compliance
- `/15-Programmatic-SEO` - Programmatic page generation
- `/16-Phase2-Portal` - Future features
- `/17-i18n` - Internationalization strings
- `/18-DevOps` - CI/CD configuration

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The site can also be deployed to:
- Cloudflare Pages
- Netlify
- AWS Amplify
- Any platform supporting Next.js

## Environment Variables

See `.env.example` for all required environment variables. Key variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `TWILIO_ACCOUNT_SID` - Twilio account SID
- `TWILIO_AUTH_TOKEN` - Twilio auth token
- `TWILIO_PHONE_NUMBER` - Business phone number
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA site key

## Contributing

This is a client project. For internal development team only.

## License

Proprietary - © 2025 Olimpia's Biohazard & Restoration

## Support

For development questions, contact the development team.
For business inquiries, visit www.olimpiasbiohazard.com

---

**Status:** Phase 1 - Foundation Complete ✅

**Next Steps:**
- Phase 2: Design System & Core Components
- Phase 3: CMS Content Architecture
- Phase 4: Core Pages Implementation
