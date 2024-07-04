import { test, expect } from '@playwright/test';
import { User } from 'objects/helper/constants/users';
import HomePage from 'objects/pages/home.page';
import LoginPage from 'objects/pages/login.page';

test.describe('Login page test', () => {
    let loginPage : LoginPage;
    let homePage : HomePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.navigate(process.env.BASE_URL);
    })
    
    test('Login - Happy flow', async () => {
        await loginPage.loginUser(User.TEST_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Problem user', async () => {
        await loginPage.loginUser(User.PROBLEM_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Performance glitch user', async () => {
        await loginPage.loginUser(User.PERFORMANCE_GLITCH_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Error user', async () => {
        await loginPage.loginUser(User.ERROR_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Visual user', async () => {
        await loginPage.loginUser(User.VISUAL_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Locked out user', async () => {
        await loginPage.loginUser(User.LOCKED_OUT_USER);
        expect(await loginPage.getErrorMessageText())
            .toContain('Sorry, this user has been locked out.');
        
    });

    test('Login - Incorrect password', async () => {
        await loginPage.loginUser(User.BAD_PW_USER);
        expect(await loginPage.getErrorMessageText())
            .toContain(' Username and password do not match any user in this service')
    })
    
    
});
