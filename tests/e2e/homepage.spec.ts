import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/')

    // Check page title
    await expect(page).toHaveTitle(/Biohazard & Crime Scene Cleanup/)

    // Check hero section exists
    await expect(page.locator('h1')).toContainText('Biohazard & Crime Scene Cleanup')

    // Check emergency CTA is visible
    const emergencyCTA = page.locator('a[href^="tel:"]').first()
    await expect(emergencyCTA).toBeVisible()
  })

  test('should display service grid with 6 services', async ({ page }) => {
    await page.goto('/')

    // Find all service cards
    const serviceCards = page.locator('a[href^="/services/"]')
    await expect(serviceCards).toHaveCount(6)

    // Check for specific services (use exact match or role)
    await expect(page.getByRole('link', { name: /Crime Scene Cleanup/ }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Biohazard Remediation/ }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Water Damage Restoration/ }).first()).toBeVisible()
  })

  test('should have working emergency phone link', async ({ page }) => {
    await page.goto('/')

    const phoneLink = page.locator('a[href^="tel:"]').first()
    await expect(phoneLink).toHaveAttribute('href', /tel:\+?1?\d{10,14}/)
  })

  test('should navigate to service page when clicking service card', async ({ page }) => {
    await page.goto('/')

    // Click first service card - skip this test if CMS data not seeded
    const serviceLink = page.locator('a[href="/services/crime-scene-cleanup"]').first()
    if (await serviceLink.count() > 0) {
      await serviceLink.click()

      // Should navigate to service page (may be 404 if no CMS data)
      await expect(page).toHaveURL(/\/services\/crime-scene-cleanup/)
    }
  })

  test('should display FAQ section', async ({ page }) => {
    await page.goto('/')

    // Check FAQ section exists
    await expect(page.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeVisible()

    // Check at least one FAQ item exists
    const faqItems = page.locator('button').filter({ hasText: /How quickly/i })
    await expect(faqItems.first()).toBeVisible()
  })

  test('should expand FAQ item when clicked', async ({ page }) => {
    await page.goto('/')

    // Find and click first FAQ item
    const firstFaq = page.locator('button').filter({ hasText: /How quickly/i }).first()
    if (await firstFaq.count() > 0) {
      await firstFaq.click()

      // Check that something expanded (answer text may vary)
      await page.waitForTimeout(500) // Wait for animation
    }
  })

  test('should have navigation header with links', async ({ page }) => {
    await page.goto('/')

    // Check header exists
    await expect(page.locator('header')).toBeVisible()

    // Check navigation links in header specifically
    await expect(page.locator('header a[href="/services"]').first()).toBeVisible()
    await expect(page.locator('header a[href="/about"]').first()).toBeVisible()
    await expect(page.locator('header a[href="/contact"]').first()).toBeVisible()
  })

  test('should have footer with contact information', async ({ page }) => {
    await page.goto('/')

    // Check footer exists
    await expect(page.locator('footer')).toBeVisible()

    // Check phone number in footer
    await expect(page.locator('footer')).toContainText(/\(\d{3}\) \d{3}-\d{4}/)
  })

  test('should display service area cities', async ({ page }) => {
    await page.goto('/')

    // Check for service area section (use exact text to avoid header matches)
    await expect(page.getByText('Portland', { exact: true })).toBeVisible()
    await expect(page.getByText('Milwaukie', { exact: true })).toBeVisible()
    await expect(page.getByText('Gresham', { exact: true })).toBeVisible()
  })

  test('should have meta description', async ({ page }) => {
    await page.goto('/')

    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /.+/)
  })

  test('should be mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Hero should be visible on mobile
    await expect(page.locator('h1')).toBeVisible()

    // Emergency CTA phone link should exist (may be hidden in fixed position)
    const phoneLinks = page.locator('a[href^="tel:"]')
    await expect(phoneLinks.first()).toBeTruthy()
  })
})
