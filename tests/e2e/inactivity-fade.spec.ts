import { expect, test } from '@playwright/test'

test('ui fade layer can reflect inactive state changes', async ({ page }) => {
  await page.goto('/')

  await page.evaluate(() => {
    window.dispatchEvent(new CustomEvent('ambient:test-set-inactive'))
  })

  await expect(page.locator('[data-testid="inactivity-fade-layer"]')).toHaveAttribute('data-active', 'false')
})
