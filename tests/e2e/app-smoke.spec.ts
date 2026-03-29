import { expect, test } from '@playwright/test'

test('app smoke renders ambient writing shell', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByPlaceholder('开始你的心流写作...')).toBeVisible()
  await expect(page.getByLabel('打开氛围控制台')).toBeVisible()
  await expect(page.getByLabel('开始 25 分钟计时')).toBeVisible()
})
