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

    // Check for specific services
    await expect(page.getByText('Crime Scene Cleanup')).toBeVisible()
    await expect(page.getByText('Biohazard Remediation')).toBeVisible()
    await expect(page.getByText('Water Damage Restoration')).toBeVisible()
  })

  test('should have working emergency phone link', async ({ page }) => {
    await page.goto('/')

    const phoneLink = page.locator('a[href^="tel:"]').first()
    await expect(phoneLink).toHaveAttribute('href', /tel:\+?1?\d{10,14}/)
  })

  test('should navigate to service page when clicking service card', async ({ page }) => {
    await page.goto('/')

    // Click first service card
    await page.click('a[href="/services/crime-scene-cleanup"]')

    // Should navigate to service page
    await expect(page).toHaveURL(/\/services\/crime-scene-cleanup/)
    await expect(page.locator('h1')).toContainText('Crime Scene Cleanup')
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
    await firstFaq.click()

    // Answer should be visible
    await expect(page.locator('text=/We provide 24\\/7/')).toBeVisible()
  })

  test('should have navigation header with links', async ({ page }) => {
    await page.goto('/')

    // Check header exists
    await expect(page.locator('header')).toBeVisible()

    // Check navigation links
    await expect(page.locator('a[href="/services"]')).toBeVisible()
    await expect(page.locator('a[href="/about"]')).toBeVisible()
    await expect(page.locator('a[href="/contact"]')).toBeVisible()
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

    // Check for service area section
    await expect(page.getByText('Portland')).toBeVisible()
    await expect(page.getByText('Milwaukie')).toBeVisible()
    await expect(page.getByText('Gresham')).toBeVisible()
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

    // Emergency CTA should be visible
    await expect(page.locator('a[href^="tel:"]').first()).toBeVisible()
  })
})
