// tests/cta.spec.ts
import { test, expect } from '@playwright/test'

test('shows emergency CTA on homepage', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('button', { name: /Call Now/i })).toBeVisible()
  await expect(page.getByRole('button', { name: /Call Me Now/i })).toBeVisible()
})
