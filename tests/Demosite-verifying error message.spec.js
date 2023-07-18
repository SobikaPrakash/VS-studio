import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //username
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('admin@gmail.com');
  //password
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('admin');
  await page.locator('[data-test="login-button"]').click();
  //Error message
  const errorMessage=await page.locator('[data-test=error]').textContent()
  console.log("Message is :"+errorMessage);
  expect (errorMessage.includes("Epic sadface")).toBeTruthy()
  
  await page.locator('[data-test="error"]').click();
  await page.close();
});

