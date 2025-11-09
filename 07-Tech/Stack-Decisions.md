# Stack Decisions (TL;DR)

- **Framework**: Next.js for SEO + ISR; app router gives better data fetching and layouts.
- **Styling**: Tailwind for speed and consistency; CSS variables for tokens.
- **CMS**: Sanity for flexible content modeling + live preview; or Payload if self-hosting is preferred.
- **Chat**: Crisp/Intercom (fast) OR custom WebSocket chat. Either way use **Twilio** for call bridging.
- **Analytics**: Plausible/PostHog (lightweight) + GA4 if ad stack is required.
- **Hosting**: Vercel (preview deployments, edge), fallback Cloudflare.
