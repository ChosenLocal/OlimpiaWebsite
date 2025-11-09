# Architecture Overview

- **Next.js (App Router, React Server Components)** + TypeScript.
- **TailwindCSS** with design tokens.
- **Sanity** (headless CMS) for content; bilingual fields.
- **Serverless** API routes for forms, chat triage, Twilio call bridger.
- **Vercel** (or Cloudflare) for edge SSR + global CDN.
- **Neon Postgres** for leads/chat transcripts (optional; can be email-only).

Security: CSP, HSTS, rate limiting, reCAPTCHA (v3) for forms, minimal PII retention.
