import { expect, test } from '@playwright/test'

test('mode switching keeps current draft content', async ({ page }) => {
  await page.goto('/')

  const textarea = page.getByPlaceholder('开始你的心流写作...')
  await textarea.fill('Keep me while it snows')

  await page.locator('[data-testid="mode-switcher-hotzone"]').hover()
  await page.getByLabel('切换到 Snow 模式').click()

  await expect(page.locator('[data-testid="ambient-canvas"]')).toHaveAttribute('data-mode', 'snow')
  await expect(textarea).toHaveValue('Keep me while it snows')
})
