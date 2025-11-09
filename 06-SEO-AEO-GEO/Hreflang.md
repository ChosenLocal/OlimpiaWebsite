# Hreflang Strategy

For every page:
- English canonical: `link rel="alternate" hreflang="en" href="https://www.olimpiasbiohazard.com/.../..."`
- Spanish alt: `link rel="alternate" hreflang="es" href="https://www.olimpiasbiohazard.com/es/.../..."`
- Optional `x-default` → English home.

Implement via Next.js Head or a helper in `lib/seo.ts`.
