import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator('.SDkEP').click();
  await page.getByRole('combobox', { name: 'Search' }).fill('java');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Images', exact: true }).click();
  await expect (page).toHaveText(Images)
  await page.getByText('Images').click();
  await page.getByRole('combobox', { name: 'Search' }).click();
});