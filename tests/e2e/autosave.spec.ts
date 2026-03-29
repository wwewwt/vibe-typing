import { expect, test } from '@playwright/test'

test('autosaves draft content across reload', async ({ page }) => {
  await page.goto('/')

  const textarea = page.getByPlaceholder('开始你的心流写作...')
  await textarea.fill('Persist this ambient draft')
  await page.reload()

  await expect(textarea).toHaveValue('Persist this ambient draft')
})
