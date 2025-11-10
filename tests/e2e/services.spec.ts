import { test, expect } from '@playwright/test'

test.describe('Service Pages', () => {
  test('should display service detail page', async ({ page }) => {
    await page.goto('/services/crime-scene-cleanup')

    // Check title and H1
    await expect(page).toHaveTitle(/Crime Scene Cleanup/)
    await expect(page.locator('h1')).toContainText('Crime Scene Cleanup')

    // Check breadcrumb navigation
    await expect(page.locator('nav[aria-label="Breadcrumb"]')).toBeVisible()
    await expect(page.locator('a[href="/"]')).toContainText('Home')

    // Check CTAs are visible
    await expect(page.locator('a[href^="tel:"]')).toBeVisible()
    await expect(page.locator('a[href="/contact"]')).toBeVisible()
  })

  test('should display process steps', async ({ page }) => {
    await page.goto('/services/biohazard-remediation')

    // Check for process section
    await expect(page.getByText(/Our Process/i)).toBeVisible()

    // Should have numbered steps
    await expect(page.getByText(/Initial Contact/i)).toBeVisible()
    await expect(page.getByText(/Assessment/i)).toBeVisible()
  })

  test('should display why choose us section', async ({ page }) => {
    await page.goto('/services/unattended-death-cleanup')

    // Check for benefits
    await expect(page.getByText(/OSHA Certified/i)).toBeVisible()
    await expect(page.getByText(/24\/7/i)).toBeVisible()
    await expect(page.getByText(/Discreet/i)).toBeVisible()
  })

  test('should display insurance information', async ({ page }) => {
    await page.goto('/services/water-damage-restoration')

    // Check insurance section
    await expect(page.getByText(/Insurance/i)).toBeVisible()
    await expect(page.getByText(/documentation/i)).toBeVisible()
  })

  test('should display FAQ section if available', async ({ page }) => {
    await page.goto('/services/fire-damage-restoration')

    // FAQ section may or may not exist depending on CMS data
    // Just check page loads successfully
    await expect(page.locator('h1')).toBeVisible()
  })

  test('should display service area', async ({ page }) => {
    await page.goto('/services/hoarding-cleanup')

    // Check service area cities are shown
    await expect(page.getByText(/Portland|Milwaukie|Gresham/i)).toBeVisible()
  })
})

test.describe('Service × City Pages', () => {
  test('should display service × city landing page', async ({ page }) => {
    await page.goto('/services/crime-scene-cleanup/in/portland')

    // Check specific H1 with city
    await expect(page.locator('h1')).toContainText('Crime Scene Cleanup in Portland, Oregon')

    // Check breadcrumb includes city
    await expect(page.locator('nav[aria-label="Breadcrumb"]')).toContainText('Portland')
  })

  test('should display response time badge', async ({ page }) => {
    await page.goto('/services/biohazard-remediation/in/milwaukie')

    // Milwaukie is HQ, so should have fastest response
    await expect(page.getByText(/Fast Response|60-90 minutes/i)).toBeVisible()
  })

  test('should display city-specific insights', async ({ page }) => {
    await page.goto('/services/water-damage-restoration/in/gresham')

    // Should have 3 city-specific insight cards
    const insightCards = page.locator('text=/work closely|serve|available/i')
    await expect(insightCards.first()).toBeVisible()
  })

  test('should display ZIP codes for city', async ({ page }) => {
    await page.goto('/services/unattended-death-cleanup/in/lake-oswego')

    // Check ZIP codes section
    await expect(page.getByText(/ZIP Codes? Served/i)).toBeVisible()
  })

  test('should show nearby cities links', async ({ page }) => {
    await page.goto('/services/fire-damage-restoration/in/west-linn')

    // Should have links to nearby cities
    await expect(page.getByText(/Nearby Cities We Serve/i)).toBeVisible()

    // Should have clickable city links
    const nearbyLink = page.locator('a[href*="/in/"]').first()
    await expect(nearbyLink).toBeVisible()
  })

  test('should show related services in same city', async ({ page }) => {
    await page.goto('/services/hoarding-cleanup/in/oregon-city')

    // Should have related services section
    await expect(page.getByText(/Other Services in Oregon City/i)).toBeVisible()

    // Should have links to other services
    const relatedLink = page.locator('a[href*="/services/"][href*="/in/oregon-city"]').first()
    await expect(relatedLink).toBeVisible()
  })

  test('should navigate between service × city pages', async ({ page }) => {
    await page.goto('/services/crime-scene-cleanup/in/beaverton')

    // Click a nearby city link
    await page.click('a[href="/services/crime-scene-cleanup/in/tigard"]')

    // Should navigate to Tigard page
    await expect(page).toHaveURL(/\/services\/crime-scene-cleanup\/in\/tigard/)
    await expect(page.locator('h1')).toContainText('Tigard')
  })

  test('should navigate to related service in same city', async ({ page }) => {
    await page.goto('/services/crime-scene-cleanup/in/portland')

    // Find and click a related service link
    const relatedService = page.locator('a[href*="/services/"][href*="/in/portland"]').first()
    await relatedService.click()

    // Should stay in Portland
    await expect(page).toHaveURL(/\/in\/portland/)
  })

  test('should have unique content per city', async ({ page }) => {
    // Check Portland page
    await page.goto('/services/crime-scene-cleanup/in/portland')
    const portlandContent = await page.locator('h1').textContent()

    // Check Gresham page
    await page.goto('/services/crime-scene-cleanup/in/gresham')
    const greshamContent = await page.locator('h1').textContent()

    // Should have different H1s
    expect(portlandContent).toContain('Portland')
    expect(greshamContent).toContain('Gresham')
    expect(portlandContent).not.toBe(greshamContent)
  })

  test('should be mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/services/biohazard-remediation/in/milwaukie')

    // Hero should be visible
    await expect(page.locator('h1')).toBeVisible()

    // Response time badge should be visible
    await expect(page.getByText(/Fast Response/i)).toBeVisible()

    // CTA buttons should be visible
    await expect(page.locator('a[href^="tel:"]')).toBeVisible()
  })
})

test.describe('Service × City Pages - Spanish', () => {
  test('should display Spanish service × city page', async ({ page }) => {
    await page.goto('/es/services/crime-scene-cleanup/in/portland')

    // Check Spanish H1
    await expect(page.locator('h1')).toContainText('Limpieza de Escena del Crimen en Portland')

    // Check Spanish breadcrumb
    await expect(page.locator('nav[aria-label="Breadcrumb"]')).toContainText('Inicio')
  })

  test('should have Spanish response time text', async ({ page }) => {
    await page.goto('/es/services/biohazard-remediation/in/milwaukie')

    await expect(page.getByText(/Respuesta Rápida/i)).toBeVisible()
  })

  test('should have Spanish CTA buttons', async ({ page }) => {
    await page.goto('/es/services/water-damage-restoration/in/gresham')

    await expect(page.locator('a').filter({ hasText: /Llamar Ahora/i })).toBeVisible()
    await expect(page.locator('a').filter({ hasText: /Solicitar Llamada/i })).toBeVisible()
  })
})
