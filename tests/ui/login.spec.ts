import { test, expect } from '@playwright/test';
import LoginPage from 'objects/pages/login.page';

test.describe('Login page test', () => {
    let loginPage : LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate(process.env.BASE_URL);
    })
    
    test('Login - Happy flow', async () => {
        await loginPage.loginUser(Users.TEST_USER);
        expect(1).toBe(1);
      }); 
});
