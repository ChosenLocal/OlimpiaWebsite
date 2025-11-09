# QA & Testing Checklist

## Accessibility (WCAG 2.2 AA)
- Keyboard nav, focus visible, alt text, color contrast, reduced motion.

## Performance
- Mobile Lighthouse ≥ 95; JS < 100KB on LCP path; chat loads after idle.

## Functional
- tel: links work; callback works (Twilio bridge); chat triage prompts.
- Forms validate server-side (Zod) and block spam (honeypot + reCAPTCHA).

## SEO
- Titles/meta unique; JSON-LD validates in Rich Results Test; hreflang pairs exist.
- 404/500 pages branded; sitemap.xml submitted; robots correct.

## Content
- Spanish parity; sensitive imagery gated/blurred with consent.
