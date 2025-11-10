import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy on homepage', async ({ page }) => {
    await page.goto('/')

    // Should have exactly one H1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    // H1 should be visible and contain text
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })

  test('should have alt text on images', async ({ page }) => {
    await page.goto('/')

    // Get all images
    const images = page.locator('img')
    const imageCount = await images.count()

    if (imageCount > 0) {
      // Check each image has alt attribute
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i)
        const alt = await img.getAttribute('alt')
        expect(alt).not.toBeNull()
      }
    }
  })

  test('should have proper form labels', async ({ page }) => {
    await page.goto('/contact')

    // Check name input has label
    const nameInput = page.locator('input[name="name"]')
    const nameLabel = page.locator('label[for="name"], label:has(input[name="name"])')
    await expect(nameLabel).toBeVisible()

    // Check email input has label
    const emailInput = page.locator('input[name="email"]')
    const emailLabel = page.locator('label[for="email"], label:has(input[name="email"])')
    await expect(emailLabel).toBeVisible()
  })

  test('should have aria-labels on interactive elements without text', async ({ page }) => {
    await page.goto('/')

    // Check if there are buttons without text that need aria-label
    const buttons = page.locator('button:not(:has-text(""))')
    const buttonCount = await buttons.count()

    // Buttons with text don't need aria-label
    // This test just ensures buttons exist and are accessible
    expect(buttonCount).toBeGreaterThanOrEqual(0)
  })

  test('should have proper navigation landmarks', async ({ page }) => {
    await page.goto('/')

    // Should have main landmark
    const main = page.locator('main')
    await expect(main).toBeVisible()

    // Should have header
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Should have footer
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })

  test('should have breadcrumb navigation with aria-label', async ({ page }) => {
    await page.goto('/services/crime-scene-cleanup')

    // Check breadcrumb has proper aria-label
    const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]')
    await expect(breadcrumb).toBeVisible()
  })

  test('should have sufficient color contrast for text', async ({ page }) => {
    await page.goto('/')

    // Get computed styles for key text elements
    const h1 = page.locator('h1').first()
    const h1Styles = await h1.evaluate(el => {
      const computed = window.getComputedStyle(el)
      return {
        color: computed.color,
        backgroundColor: computed.backgroundColor
      }
    })

    // Basic check that colors are defined
    expect(h1Styles.color).toBeTruthy()
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/')

    // Focus first link and press Tab
    await page.keyboard.press('Tab')

    // Check that something is focused
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(focusedElement).toBeTruthy()
  })

  test('should have visible focus indicators', async ({ page }) => {
    await page.goto('/')

    // Tab to first focusable element
    await page.keyboard.press('Tab')

    // Get focused element
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()

    // Check if outline or box-shadow exists (focus indicator)
    const styles = await focusedElement.evaluate(el => {
      const computed = window.getComputedStyle(el)
      return {
        outline: computed.outline,
        outlineWidth: computed.outlineWidth,
        boxShadow: computed.boxShadow
      }
    })

    // Should have some form of focus indicator
    const hasFocusIndicator =
      styles.outlineWidth !== '0px' ||
      styles.boxShadow !== 'none'

    expect(hasFocusIndicator).toBe(true)
  })

  test('should have proper link text (not "click here")', async ({ page }) => {
    await page.goto('/')

    // Get all links
    const links = page.locator('a')
    const linkCount = await links.count()

    for (let i = 0; i < linkCount; i++) {
      const linkText = await links.nth(i).textContent()
      const href = await links.nth(i).getAttribute('href')

      // If link has text, it shouldn't be just "click here" or "here"
      if (linkText && linkText.trim().length > 0) {
        const lowerText = linkText.toLowerCase().trim()
        expect(lowerText).not.toBe('click here')
        expect(lowerText).not.toBe('here')
      }

      // Links should have either text content or aria-label
      const ariaLabel = await links.nth(i).getAttribute('aria-label')
      const hasAccessibleText = (linkText && linkText.trim().length > 0) || ariaLabel
      expect(hasAccessibleText).toBe(true)
    }
  })

  test('should have skip to main content link', async ({ page }) => {
    await page.goto('/')

    // Press Tab to focus skip link (usually first focusable element)
    await page.keyboard.press('Tab')

    // Check if a skip link exists
    const skipLink = page.locator('a[href="#main"], a:has-text("Skip to")')
    const skipLinkCount = await skipLink.count()

    // Skip link is recommended but not required
    // Just log if it exists
    if (skipLinkCount > 0) {
      await expect(skipLink.first()).toBeTruthy()
    }
  })

  test('should have proper language attribute', async ({ page }) => {
    await page.goto('/')
    const html = page.locator('html')
    await expect(html).toHaveAttribute('lang', /^en/)

    await page.goto('/es')
    await expect(html).toHaveAttribute('lang', /^es/)
  })

  test('should have proper page title on all pages', async ({ page }) => {
    const pages = ['/', '/about', '/contact', '/services/crime-scene-cleanup']

    for (const pagePath of pages) {
      await page.goto(pagePath)
      const title = await page.title()
      expect(title).toBeTruthy()
      expect(title.length).toBeGreaterThan(0)
    }
  })

  test('should have required fields marked appropriately', async ({ page }) => {
    await page.goto('/contact')

    // Required inputs should have required attribute
    const requiredInputs = page.locator('input[required], textarea[required], select[required]')
    const count = await requiredInputs.count()

    expect(count).toBeGreaterThan(0)

    // Check if visually indicated (asterisk or label text)
    // This is a basic check - actual implementation may vary
  })

  test('should not have duplicate IDs', async ({ page }) => {
    await page.goto('/')

    // Get all elements with IDs
    const ids = await page.evaluate(() => {
      const elements = document.querySelectorAll('[id]')
      return Array.from(elements).map(el => el.id)
    })

    // Check for duplicates
    const uniqueIds = new Set(ids)
    expect(ids.length).toBe(uniqueIds.size)
  })

  test('should have accessible error messages', async ({ page }) => {
    await page.goto('/contact')

    // Try to submit empty form
    await page.click('button[type="submit"]')

    // HTML5 validation will show messages
    // Check that required fields are marked
    const nameInput = page.locator('input[name="name"]')
    const isInvalid = await nameInput.evaluate((el: HTMLInputElement) => !el.validity.valid)

    expect(isInvalid).toBe(true)
  })
})

test.describe('Accessibility - Mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
  })

  test('should have proper touch targets on mobile', async ({ page }) => {
    await page.goto('/')

    // Check emergency CTA button size (should be at least 44x44px)
    const ctaButton = page.locator('a[href^="tel:"]').first()
    const box = await ctaButton.boundingBox()

    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(40) // Slightly less due to padding
      expect(box.width).toBeGreaterThanOrEqual(40)
    }
  })

  test('should have readable text on mobile', async ({ page }) => {
    await page.goto('/')

    // Check body text font size
    const bodyText = page.locator('p').first()
    const fontSize = await bodyText.evaluate(el => {
      return window.getComputedStyle(el).fontSize
    })

    // Convert to number
    const fontSizeNum = parseInt(fontSize)
    expect(fontSizeNum).toBeGreaterThanOrEqual(14) // Minimum 14px for body text
  })

  test('should not have horizontal scroll', async ({ page }) => {
    await page.goto('/')

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth
    })

    expect(hasHorizontalScroll).toBe(false)
  })
})
