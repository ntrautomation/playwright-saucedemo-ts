import { test, expect } from '@playwright/test';

test.describe('Login page test', () => {
    test('Login - Happy flow', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        expect(1).toBe(1);
      }); 
});
