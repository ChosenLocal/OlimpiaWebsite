# Sanity CMS Setup & Content

This directory contains all Sanity CMS configuration, schemas, and seed data for the Olimpia's Biohazard website.

## Configuration

- **Project ID:** `7phj7yjk`
- **Dataset:** `production`
- **Studio Path:** `/studio` (accessible at http://localhost:3000/studio)

## Content Schemas

The CMS includes 7 content types:

1. **service** - Core service pages (EN/ES)
   - Title, slug, summary, rich text body
   - FAQ references
   - Hero image
   - Locale field

2. **city** - Target cities for service area
   - Name, slug, state
   - Summary
   - Locale field

3. **serviceCity** - Programmatic service × city pages
   - References to service and city
   - Unique intro (120-180 words)
   - Local FAQs
   - Auto-generated slug

4. **faq** - Reusable Q&A entities
   - Question, answer
   - Tags for categorization
   - Locale field

5. **guide** - Resource articles
   - Title, slug, excerpt
   - Rich text body
   - Locale field

6. **testimonial** - Customer quotes
   - Name, quote, rating
   - City/location
   - Locale field

7. **settings** - Sitewide configuration
   - Business name, phone, email
   - Address, hours
   - LocalBusiness JSON-LD blob

## Seed Data

The `seed-data.ts` file contains initial content:

- **6 English services** (crime scene, biohazard, unattended death, water, fire, hoarding)
- **2 Spanish services** (partial parity for demonstration)
- **8 cities** in Portland Metro area
- **8 English FAQs** covering common questions
- **2 Spanish FAQs** (starter content)
- **3 testimonials** (2 EN, 1 ES)
- **Site settings** with business info

## Importing Seed Data

To populate your Sanity CMS with initial content:

### Prerequisites

1. Make sure you have a Sanity API token with write permissions
2. Add the token to your `.env.local`:
   ```
   SANITY_API_TOKEN=your_token_here
   ```

### Run Import

```bash
npm run sanity:import
```

This will create all documents in your Sanity dataset. You should see output like:

```
🚀 Starting Sanity CMS data import...

📦 Importing English services...
✅ Created: Crime Scene Cleanup
✅ Created: Biohazard Remediation
...

✨ Import complete!
```

## Accessing Sanity Studio

### Development

1. Start the Next.js dev server:
   ```bash
   npm run dev
   ```

2. Navigate to: http://localhost:3000/studio

3. Sign in with your Sanity account

### Production

Deploy the Studio:
```bash
npm run sanity:deploy
```

## Content Guidelines

### Spanish Parity

All content should have Spanish equivalents within 48 hours:
- Services must have both EN and ES versions
- FAQs should be translated
- Testimonials can be language-specific

### Programmatic Pages (serviceCity)

When creating service × city pages:
- Write unique intro (120-180 words minimum)
- Include local resources (verified links)
- Add 3-5 city-specific FAQs
- Flag if >70% similarity with existing pages

### Certification Claims

- Only publish verified certifications
- Do NOT claim unmarked vehicles unless true
- Require editorial pass on all claims

### Sensitive Imagery

- NO graphic imagery published
- Written consent required for job photos
- Blur faces, identifying items, addresses
- Watermark all images

## Schema Modifications

To modify schemas:

1. Edit files in `/sanity/schemas/`
2. Update `schemas/index.ts` if adding new types
3. Restart Sanity Studio to see changes

## Troubleshooting

### Import Fails

**Error: "Insufficient permissions"**
- Check that your SANITY_API_TOKEN has write access
- Generate a new token in Sanity dashboard

**Error: "Project not found"**
- Verify NEXT_PUBLIC_SANITY_PROJECT_ID is `7phj7yjk`
- Check that you're a member of the project

### Studio Won't Load

**Blank screen:**
- Check browser console for errors
- Verify project ID in `sanity.config.ts`
- Try clearing browser cache

**401 Unauthorized:**
- Sign out and sign back in
- Check project permissions in Sanity dashboard

## Next Steps

After importing seed data:

1. **Review content** in Sanity Studio
2. **Add more FAQs** (target: 50+ total)
3. **Complete Spanish translations** for all services
4. **Add hero images** to service documents
5. **Create serviceCity** combinations for programmatic pages
6. **Add guides** (resources section)

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)
