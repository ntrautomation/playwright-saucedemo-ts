import { expect } from '@playwright/test';
import { test } from '@fixtures/init';
import { BurgerMenuItems, ProductItems, ProductItemsReverse, ProductsByPriceHigh, ProductsByPriceLow, SORT } from '@helpers/constants/productPageConsts';
import { Env } from '@envConfig/env';

test.describe('Home page tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigate(Env.INV_URL)
    });

    test('Validate burger menu items', async ({ homePage }) => {
        await homePage.clickOnBurgerMenu()
        expect(await homePage.getBurgerMenuItems()).toEqual(BurgerMenuItems) 
    });

    test('Validate product items', async ({ homePage }) => {
        expect(await homePage.getProductNames()).toEqual(ProductItems);
    });
    
    test('Order price low to high', async ({ homePage }) => {
        await homePage.selectOrderByOption(SORT.PRICE_LOW)
        expect(await homePage.getProductNames()).toEqual(ProductsByPriceLow);
    });

    test('Order price high to low', async ({ homePage }) => {
        await homePage.selectOrderByOption(SORT.PRICE_HIGH)
        expect(await homePage.getProductNames()).toEqual(ProductsByPriceHigh);
    });

    test('Order price in reverse order', async ({ homePage }) => {
        await homePage.selectOrderByOption(SORT.Z_TO_A)
        expect(await homePage.getProductNames()).toEqual(ProductItemsReverse);
    });
})
