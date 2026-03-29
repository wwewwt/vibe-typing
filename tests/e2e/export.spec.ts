import { expect, test } from '@playwright/test'

test('export produces a txt download payload', async ({ page }) => {
  await page.goto('/')

  await page.getByPlaceholder('开始你的心流写作...').fill('Export this text')
  await page.getByLabel('打开氛围控制台').click()
  await page.getByLabel('导出当前文本').click()

  await expect(page.locator('[data-testid="export-status"]')).toHaveText(/\.txt$/)
})
