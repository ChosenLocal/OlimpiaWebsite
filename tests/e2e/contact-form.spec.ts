import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should display contact page with form', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Contact Us/)

    // Check form is visible
    await expect(page.locator('form')).toBeVisible()

    // Check all form fields exist
    await expect(page.locator('input[name="name"]')).toBeVisible()
    await expect(page.locator('input[name="phone"]')).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('input[name="zip"]')).toBeVisible()
    await expect(page.locator('select[name="service"]')).toBeVisible()
    await expect(page.locator('textarea[name="message"]')).toBeVisible()
    await expect(page.locator('input[name="consent"]')).toBeVisible()
  })

  test('should show validation errors for empty form', async ({ page }) => {
    // Try to submit empty form
    await page.click('button[type="submit"]')

    // HTML5 validation should prevent submission
    const nameInput = page.locator('input[name="name"]')
    await expect(nameInput).toHaveAttribute('required', '')
  })

  test('should fill out form with valid data', async ({ page }) => {
    // Fill out form
    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="phone"]', '5035551234')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('input[name="zip"]', '97222')
    await page.selectOption('select[name="service"]', 'crime-scene')
    await page.fill('textarea[name="message"]', 'I need emergency cleanup services immediately.')
    await page.check('input[name="consent"]')

    // Check all fields are filled
    await expect(page.locator('input[name="name"]')).toHaveValue('John Doe')
    await expect(page.locator('input[name="phone"]')).toHaveValue('5035551234')
    await expect(page.locator('input[name="email"]')).toHaveValue('john@example.com')
  })

  test('should validate email format', async ({ page }) => {
    const emailInput = page.locator('input[name="email"]')

    // Check email input has type="email"
    await expect(emailInput).toHaveAttribute('type', 'email')

    // Fill with invalid email
    await emailInput.fill('invalid-email')

    // Try to submit
    await page.click('button[type="submit"]')

    // Should show validation error (HTML5)
    const validationMessage = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage)
    expect(validationMessage).toBeTruthy()
  })

  test('should validate ZIP code length', async ({ page }) => {
    const zipInput = page.locator('input[name="zip"]')

    // Check max length is 5
    await expect(zipInput).toHaveAttribute('maxlength', '5')

    // Fill with too many digits
    await zipInput.fill('972222')

    // Should be truncated to 5 digits
    const value = await zipInput.inputValue()
    expect(value.length).toBeLessThanOrEqual(5)
  })

  test('should have service dropdown with options', async ({ page }) => {
    const serviceSelect = page.locator('select[name="service"]')

    // Check it has options
    const options = await serviceSelect.locator('option').count()
    expect(options).toBeGreaterThan(1) // At least placeholder + 1 service

    // Check for specific services
    await expect(serviceSelect.locator('option[value="crime-scene"]')).toBeVisible()
    await expect(serviceSelect.locator('option[value="biohazard"]')).toBeVisible()
  })

  test('should require consent checkbox', async ({ page }) => {
    const consentCheckbox = page.locator('input[name="consent"]')

    // Should be required
    await expect(consentCheckbox).toHaveAttribute('required', '')

    // Should not be checked by default
    await expect(consentCheckbox).not.toBeChecked()
  })

  test('should display emergency contact information', async ({ page }) => {
    // Check 24/7 emergency line is displayed
    await expect(page.getByText(/24\/7 Emergency Line/i)).toBeVisible()

    // Check phone number is displayed
    await expect(page.locator('text=/\\(\\d{3}\\) \\d{3}-\\d{4}/')).toBeVisible()

    // Check email is displayed
    await expect(page.getByText(/info@olimpiasbiohazard.com/i)).toBeVisible()
  })

  test('should have call now CTA', async ({ page }) => {
    const callButton = page.locator('a[href^="tel:"]').first()
    await expect(callButton).toBeVisible()
    await expect(callButton).toContainText(/Call Now/i)
  })

  test('should have link to FAQ', async ({ page }) => {
    await expect(page.locator('a[href="/#faq"]')).toBeVisible()
  })

  test('should be mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/contact')

    // Form should be visible on mobile
    await expect(page.locator('form')).toBeVisible()

    // Submit button should be full width
    const submitButton = page.locator('button[type="submit"]')
    const buttonBox = await submitButton.boundingBox()
    const viewportSize = page.viewportSize()

    // Button should be at least 80% of viewport width (accounting for padding)
    if (buttonBox && viewportSize) {
      expect(buttonBox.width).toBeGreaterThan(viewportSize.width * 0.8)
    }
  })
})

test.describe('Contact Form - Spanish', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/es/contact')
  })

  test('should display Spanish contact form', async ({ page }) => {
    // Check Spanish title
    await expect(page).toHaveTitle(/Contáctenos/)

    // Check Spanish labels
    await expect(page.getByText('Nombre')).toBeVisible()
    await expect(page.getByText('Teléfono')).toBeVisible()
    await expect(page.getByText('Correo Electrónico')).toBeVisible()
  })

  test('should have Spanish submit button', async ({ page }) => {
    const submitButton = page.locator('button[type="submit"]')
    await expect(submitButton).toContainText(/Enviar Solicitud/i)
  })

  test('should display Spanish emergency contact info', async ({ page }) => {
    await expect(page.getByText(/Línea de Emergencia 24\/7/i)).toBeVisible()
  })
})
