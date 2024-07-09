import { test, expect} from '@fixtures/init';
import { Env } from '@envConfig/env';
import { PRODUCTS } from '@objects/helper/constants/productPageConsts';

test.describe('Cart page tests', () => {
    test.use({ storageState: Env.LOGGED_STATE_PATH})
    test.beforeEach(async ({ cartPage }) => {
        await cartPage.navigate(Env.CART_ULR)
    });

    test('Cart elements visibility', async ({ cartPage}) => {
        await expect(cartPage.pageElements(0)).toBeVisible();
        await expect(cartPage.pageElements(1)).toBeVisible();
        await expect(cartPage.pageElements(2)).toBeVisible();
        await expect(cartPage.pageElements(3)).toBeVisible();
        await expect(cartPage.pageElements(4)).toBeVisible();
    });
    
})

test.describe('Cart flow', () => {
    test.use({ storageState: Env.ITEM_TO_CART});
    test.beforeEach(async ({ cartPage }) => {
        await cartPage.navigate(Env.CART_ULR)
    });

    test('Validate item in cart', async ({ cartPage }) => {
        expect(await cartPage.getItemName(0)).toBe(PRODUCTS.BACKPACK)
    })
})

