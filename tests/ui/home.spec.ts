import { expect } from '@playwright/test';
import { test } from '@fixtures/init';
import { BurgerMenuItems, ProductItems } from '@helpers/constants/burgerMenuItems';
import { Env } from '@envConfig/env';

test.describe('Home page tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigate(Env.INV_URL)
    })

    test('Validate burger menu items', async ({ homePage }) => {
        await homePage.clickOnBurgerMenu()
        expect(await homePage.getBurgerMenuItems()).toEqual(BurgerMenuItems) 
    });

    test('Validate product items', async ({ homePage }) => {
        await homePage.clickOnBurgerMenu()
        expect(await homePage.getProductNames()).toEqual(ProductItems);
    })
    
    
})
