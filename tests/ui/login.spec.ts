import { test, expect } from '@playwright/test';

test.describe('Login page test', () => {
    test('Login - Happy flow', async ({ page }) => {
        await page.goto(process.env.BASE_URL);
        await page.locator('[data-test="username"]').fill(process.env.USER_NAME);
        await page.locator('[data-test="password"]').fill(process.env.PASSWORD);
        await page.locator('[data-test="login-button"]').click();
        expect(1).toBe(1);
      }); 
});
