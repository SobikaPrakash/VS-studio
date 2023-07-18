import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('amazon.in');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'India\'s largest online store - Great deals & prices everyday Amazon.in  https://www.amazon.in' }).click();
  await page.getByRole('navigation', { name: 'navigation' }).getByRole('link', { name: 'Choose a language for shopping.' }).click();
  await page.locator('label').filter({ hasText: 'தமிழ் - TA - மொழிபெயர்ப்பு' }).locator('i').click();
  await page.getByRole('link', { name: 'ரத்துசெய்க' }).click();
  await page.close();
});