import { test, expect } from '@playwright/test';
import { BurgerMenuItems } from 'objects/helper/constants/burgerMenuItems';
import { User } from "objects/helper/constants/users";
import HomePage from "objects/pages/home.page";
import LoginPage from "objects/pages/login.page"

test.describe('Home page tests', () => {
    let loginPage : LoginPage;
    let homePage : HomePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.navigate(process.env.BASE_URL);
    })

    test('Validate burger menu items', async () => {
        await loginPage.loginUser(User.TEST_USER);
        await homePage.clickOnBurgerMenu()
        expect( await homePage.getBurgerMenuItems()).toEqual(BurgerMenuItems)  
    })
    
    
})
