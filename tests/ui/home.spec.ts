import { test, expect } from '@playwright/test';
import { BurgerMenuItems, ProductItems } from '@helpers/constants/burgerMenuItems';
import HomePage from "@pages/home.page";
import { Env } from '@envConfig/env';

test.describe('Home page tests', () => {
    let homePage : HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate(Env.INV_URL)
    })

    test('Validate burger menu items', async () => {
        await homePage.clickOnBurgerMenu()
        expect(await homePage.getBurgerMenuItems()).toEqual(BurgerMenuItems) 
    });

    test('Validate product items', async () => {
        await homePage.clickOnBurgerMenu()
        expect(await homePage.getProductNames()).toEqual(ProductItems);
    })
    
    
})
