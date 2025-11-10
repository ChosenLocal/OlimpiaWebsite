import { test, expect } from '@playwright/test'

test.describe('Bilingual Navigation', () => {
  test('should display English homepage by default', async ({ page }) => {
    await page.goto('/')

    // Check English content
    await expect(page.locator('h1')).toContainText('Biohazard & Crime Scene Cleanup')
    await expect(page.getByText('Call Now')).toBeVisible()
  })

  test('should display Spanish homepage at /es', async ({ page }) => {
    await page.goto('/es')

    // Check Spanish content
    await expect(page.locator('h1')).toContainText('Limpieza de Materiales Peligrosos')
    await expect(page.getByText('Llamar Ahora')).toBeVisible()
  })

  test('should have language toggle on English pages', async ({ page }) => {
    await page.goto('/')

    // Look for language toggle (could be link or button)
    const languageToggle = page.locator('a[href="/es"], button:has-text("ES"), a:has-text("Español")')
    await expect(languageToggle.first()).toBeVisible()
  })

  test('should have language toggle on Spanish pages', async ({ page }) => {
    await page.goto('/es')

    // Look for English toggle
    const languageToggle = page.locator('a[href="/"], button:has-text("EN"), a:has-text("English")')
    await expect(languageToggle.first()).toBeVisible()
  })

  test('should maintain path when switching languages on about page', async ({ page }) => {
    await page.goto('/about')

    // Check if language toggle exists and preserves path
    const esLink = page.locator('a[href="/es/about"]')
    if (await esLink.count() > 0) {
      await esLink.first().click()
      await expect(page).toHaveURL('/es/about')
    }
  })

  test('should maintain path when switching languages on contact page', async ({ page }) => {
    await page.goto('/contact')

    // Check if language toggle exists
    const esLink = page.locator('a[href="/es/contact"]')
    if (await esLink.count() > 0) {
      await esLink.first().click()
      await expect(page).toHaveURL('/es/contact')
    }
  })

  test('should have hreflang tags for SEO', async ({ page }) => {
    await page.goto('/')

    // Check for hreflang tags
    const hreflangEn = page.locator('link[hreflang="en"]')
    const hreflangEs = page.locator('link[hreflang="es"]')

    // At least one should exist
    const enCount = await hreflangEn.count()
    const esCount = await hreflangEs.count()
    expect(enCount + esCount).toBeGreaterThan(0)
  })
})

test.describe('Bilingual Content Parity', () => {
  test('should have matching navigation structure', async ({ page }) => {
    // Get English nav links
    await page.goto('/')
    const enNavLinks = await page.locator('header a').count()

    // Get Spanish nav links
    await page.goto('/es')
    const esNavLinks = await page.locator('header a').count()

    // Should have similar number of links (may differ by 1-2 for language toggle)
    expect(Math.abs(enNavLinks - esNavLinks)).toBeLessThanOrEqual(2)
  })

  test('should have translated CTAs', async ({ page }) => {
    // English CTAs
    await page.goto('/')
    await expect(page.getByText(/Call Now|Request Callback/i).first()).toBeVisible()

    // Spanish CTAs
    await page.goto('/es')
    await expect(page.getByText(/Llamar Ahora|Solicitar Llamada/i).first()).toBeVisible()
  })

  test('should have translated service names', async ({ page }) => {
    // English services
    await page.goto('/')
    await expect(page.getByText('Crime Scene Cleanup')).toBeVisible()

    // Spanish services
    await page.goto('/es')
    await expect(page.getByText('Limpieza de Escena del Crimen')).toBeVisible()
  })

  test('should have translated about page', async ({ page }) => {
    // English about
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText(/About/i)

    // Spanish about
    await page.goto('/es/about')
    await expect(page.locator('h1')).toContainText(/Acerca de/i)
  })

  test('should have translated contact page', async ({ page }) => {
    // English contact
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText(/Contact Us/i)
    await expect(page.getByText(/Name|Phone|Email/i).first()).toBeVisible()

    // Spanish contact
    await page.goto('/es/contact')
    await expect(page.locator('h1')).toContainText(/Contáctenos/i)
    await expect(page.getByText(/Nombre|Teléfono/i).first()).toBeVisible()
  })
})

test.describe('Bilingual Service Pages', () => {
  test('should have Spanish service detail pages', async ({ page }) => {
    await page.goto('/es/services/crime-scene-cleanup')

    await expect(page.locator('h1')).toContainText('Limpieza de Escena del Crimen')
  })

  test('should have Spanish service × city pages', async ({ page }) => {
    await page.goto('/es/services/crime-scene-cleanup/in/portland')

    await expect(page.locator('h1')).toContainText('Limpieza de Escena del Crimen en Portland')
    await expect(page.getByText(/Respuesta Rápida/i)).toBeVisible()
  })

  test('should maintain language when navigating between pages', async ({ page }) => {
    await page.goto('/es')

    // Navigate to about page
    await page.click('a[href="/es/about"]')
    await expect(page).toHaveURL('/es/about')

    // Should still be in Spanish
    await expect(page.locator('h1')).toContainText(/Acerca de/i)

    // Navigate to contact
    await page.click('a[href="/es/contact"]')
    await expect(page).toHaveURL('/es/contact')

    // Should still be in Spanish
    await expect(page.locator('h1')).toContainText(/Contáctenos/i)
  })
})

test.describe('Bilingual Phone Numbers', () => {
  test('should have same phone number in both languages', async ({ page }) => {
    // Get English phone
    await page.goto('/')
    const enPhoneLink = page.locator('a[href^="tel:"]').first()
    const enPhone = await enPhoneLink.getAttribute('href')

    // Get Spanish phone
    await page.goto('/es')
    const esPhoneLink = page.locator('a[href^="tel:"]').first()
    const esPhone = await esPhoneLink.getAttribute('href')

    // Should be the same phone number
    expect(enPhone).toBe(esPhone)
  })

  test('should format phone number correctly in both languages', async ({ page }) => {
    // English formatting
    await page.goto('/')
    await expect(page.locator('text=/\\(\\d{3}\\) \\d{3}-\\d{4}/')).toBeVisible()

    // Spanish formatting (should be same format)
    await page.goto('/es')
    await expect(page.locator('text=/\\(\\d{3}\\) \\d{3}-\\d{4}/')).toBeVisible()
  })
})

test.describe('Bilingual Meta Tags', () => {
  test('should have English meta tags on English pages', async ({ page }) => {
    await page.goto('/')

    const metaLang = page.locator('html')
    await expect(metaLang).toHaveAttribute('lang', 'en')
  })

  test('should have Spanish meta tags on Spanish pages', async ({ page }) => {
    await page.goto('/es')

    const metaLang = page.locator('html')
    // May be 'es' or 'es-US'
    const lang = await metaLang.getAttribute('lang')
    expect(lang).toMatch(/^es/)
  })

  test('should have Open Graph locale tags', async ({ page }) => {
    await page.goto('/')

    // Check for og:locale meta tag
    const ogLocale = page.locator('meta[property="og:locale"]')
    if (await ogLocale.count() > 0) {
      await expect(ogLocale).toHaveAttribute('content', /en/)
    }
  })
})
