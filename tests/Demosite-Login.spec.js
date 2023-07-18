import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://www.saucedemo.com/');
  //user name
  await page.locator('[data-test="username"]').fill('standard_user');
  //password
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  //logout 
  await page.locator('//button[@id="react-burger-menu-btn"]').click();
  await page.locator("//a[@id='logout_sidebar_link']").click();
  await page.close()
  
});