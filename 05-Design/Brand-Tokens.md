# Brand Tokens

Derived from provided logo (gold crown & shield on black; biohazard green, fire red, water blue).

## Colors
- Gold: #F0C24B (primary accents/CTAs)
- Coal Black: #0D0D0D (background)
- Charcoal: #1A1A1A (surfaces)
- Hazard Green: #48C47A (secondary/positive)
- Water Blue: #4AA3E0 (links/info)
- Fire Red: #E85C40 (alerts/emergency)
- White: #FFFFFF (text/background)

## Typography
- Headings: Poppins (600/700)
- Body/UI: Inter (400/500)
- Fallbacks: system-ui, -apple-system, Segoe UI, Roboto

## CSS Variables (tokens.css)
\`\`\`css
:root {
  --color-gold: #F0C24B;
  --color-black: #0D0D0D;
  --color-charcoal: #1A1A1A;
  --color-green: #48C47A;
  --color-blue: #4AA3E0;
  --color-red: #E85C40;
  --color-white: #FFFFFF;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
}
\`\`\`

## Tailwind Theme Snippet
\`\`\`js
// tailwind.config.js (excerpt)
module.exports = {
  theme: {
    extend: {
      colors: {
        gold: '#F0C24B',
        coal: '#0D0D0D',
        charcoal: '#1A1A1A',
        hazard: '#48C47A',
        water: '#4AA3E0',
        fire: '#E85C40'
      },
      borderRadius: {
        'sm': '8px', 'md': '12px', 'lg': '16px'
      }
    }
  }
}
\`\`\`
