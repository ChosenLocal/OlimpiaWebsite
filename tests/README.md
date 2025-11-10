# E2E Testing with Playwright

Comprehensive end-to-end tests for Olimpia's Biohazard & Restoration website.

## Test Suites

### 1. Homepage Tests (`homepage.spec.ts`)
- Page load and hero section
- Service grid display (6 services)
- Emergency CTA functionality
- FAQ accordion interaction
- Navigation and footer
- Mobile responsiveness

### 2. Contact Form Tests (`contact-form.spec.ts`)
- Form field validation
- Required field checks
- Email and ZIP code format validation
- Service dropdown options
- Consent checkbox requirement
- Emergency contact information display
- Bilingual form tests (EN/ES)
- Mobile form layout

### 3. Service Pages Tests (`services.spec.ts`)
- Service detail pages
- Service × city landing pages (96 pages)
- Response time badges
- City-specific content
- ZIP code display
- Nearby cities navigation
- Related services links
- Breadcrumb navigation
- Spanish service pages

### 4. Bilingual Navigation Tests (`bilingual.spec.ts`)
- Language switching (EN ↔ ES)
- Path preservation when switching languages
- Content parity between languages
- Hreflang tags for SEO
- Phone number consistency
- Meta tag localization (lang attribute, og:locale)

### 5. Accessibility Tests (`accessibility.spec.ts`)
- Heading hierarchy (single H1)
- Image alt text
- Form labels and ARIA attributes
- Navigation landmarks (header, main, footer)
- Breadcrumb navigation
- Keyboard navigation
- Focus indicators
- Proper link text (no "click here")
- Language attributes
- No duplicate IDs
- Touch target sizes (mobile)
- Text readability (mobile)

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Specific Test Suite
```bash
npx playwright test homepage
npx playwright test contact-form
npx playwright test services
npx playwright test bilingual
npx playwright test accessibility
```

### Run on Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Mobile Tests Only
```bash
npx playwright test --project="Mobile Chrome"
npx playwright test --project="Mobile Safari"
```

### Run in UI Mode (Interactive)
```bash
npm run test:ui
```

### Run with Debug Mode
```bash
npx playwright test --debug
```

### View Test Report
```bash
npx playwright show-report
```

## Test Configuration

Tests are configured in `playwright.config.ts`:

- **Base URL**: http://localhost:3000 (or from `BASE_URL` env var)
- **Browsers**: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari
- **Retries**: 2 retries in CI, 0 locally
- **Parallel**: Fully parallel execution
- **Screenshots**: On failure only
- **Trace**: On first retry

## Writing New Tests

### Test Structure
```typescript
import { test, expect } from '@playwright/test'

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/path')

    // Assertions
    await expect(page.locator('selector')).toBeVisible()
  })
})
```

### Best Practices

1. **Use Semantic Selectors**
   - Prefer: `page.getByRole('button', { name: 'Submit' })`
   - Over: `page.locator('.btn-submit')`

2. **Wait for Elements**
   - Use `await expect()` for automatic waiting
   - Avoid manual `waitForTimeout()`

3. **Test User Flows, Not Implementation**
   - Focus on what users see and do
   - Don't test internal state

4. **Keep Tests Independent**
   - Each test should be self-contained
   - Don't rely on test execution order

5. **Use Descriptive Test Names**
   - `test('should display error when email is invalid', ...)`
   - Not: `test('test email', ...)`

## Coverage

### Pages Tested
- ✅ Homepage (EN/ES)
- ✅ About page (EN/ES)
- ✅ Contact page (EN/ES)
- ✅ Service detail pages (6 services × 2 languages)
- ✅ Service × city pages (48 combinations × 2 languages)

### Features Tested
- ✅ Navigation and routing
- ✅ Form validation and submission
- ✅ Language switching
- ✅ Mobile responsiveness
- ✅ Accessibility (WCAG 2.2 AA)
- ✅ SEO elements (titles, meta, hreflang)
- ✅ CTAs and phone links

### Browsers Tested
- ✅ Chrome (Desktop)
- ✅ Firefox (Desktop)
- ✅ Safari (Desktop)
- ✅ Chrome (Mobile - Pixel 5)
- ✅ Safari (Mobile - iPhone 12)

## CI/CD Integration

Tests automatically run in CI with:
- 2 retries for flaky tests
- Single worker for consistency
- Screenshot capture on failure
- HTML report generation

### GitHub Actions Example
```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright browsers
  run: npx playwright install --with-deps

- name: Run tests
  run: npm test

- name: Upload test results
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```

## Debugging Failed Tests

1. **View Screenshots**
   - Screenshots saved in `test-results/`
   - Captured automatically on failure

2. **View Traces**
   - Traces saved on first retry
   - View with: `npx playwright show-trace trace.zip`

3. **Run in Debug Mode**
   ```bash
   npx playwright test --debug filename.spec.ts
   ```

4. **Use UI Mode**
   ```bash
   npm run test:ui
   ```
   - Time travel debugging
   - Watch mode
   - Pick tests visually

## Performance Testing

While not full performance tests, these E2E tests verify:
- Page load times (implicit in test execution)
- No horizontal scroll on mobile
- Proper image loading
- Form submission responsiveness

For detailed performance testing, use Lighthouse or WebPageTest.

## Future Enhancements

- [ ] Visual regression testing (Playwright screenshots comparison)
- [ ] API route testing (lead submission, callback, chat)
- [ ] Load testing (artillery/k6)
- [ ] Lighthouse CI integration
- [ ] Accessibility audit with axe-core
- [ ] End-to-end user journeys (multi-page flows)
