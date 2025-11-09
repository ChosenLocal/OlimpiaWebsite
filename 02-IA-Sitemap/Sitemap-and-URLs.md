# Information Architecture & URL Strategy

## Top Navigation
- Home (`/`)
- Services
  - Crime Scene Cleanup (`/services/crime-scene-cleanup`)
  - Biohazard Remediation (`/services/biohazard-remediation`)
  - Unattended Death Cleanup (`/services/unattended-death-cleanup`)
  - Water Damage Restoration (`/services/water-damage-restoration`)
  - Fire Damage Restoration (`/services/fire-damage-restoration`)
  - Hoarding Cleanup (`/services/hoarding-cleanup`)
- Areas We Serve (`/service-area/` → city pages)
- Pricing & Insurance (`/pricing-and-insurance`)
- About (`/about`)
- Resources (`/resources` → guides, FAQs, checklists)
- For Professionals (`/professionals`)
- Contact (`/contact`)

**Spanish mirror:** `/es/...` with identical structure; add `hreflang` pairs and canonicalization.

## Programmatic SEO (Service × City)
Pattern: `/services/{service}/in/{city-slug}/`

**Rules**
- Each page must include: unique intro, local references, 3–5 localized FAQs, internal links, and an offer block.
- Canonical to itself (no duplicates). Avoid doorway pages.

## Slug Rules
- Kebab-case, descriptive, stable.
- Keep to ≤ 60 chars; include city for S×C pages.
- Redirect legacy URLs (see `12-Launch/301-mapping-template.csv`).

## Breadcrumbs
`Home > Services > {Service} > In {City}` → emit `BreadcrumbList` schema.
