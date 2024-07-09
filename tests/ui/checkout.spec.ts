import { test, expect } from '@fixtures/init';
import { Env } from '@envConfig/env';

test.describe('Checkout page test', () => {
    test.use({ storageState: Env.ITEM_TO_CART});
    test.beforeEach(async ({ checkoutPage }) => {
        await checkoutPage.navigate(Env.CHECKOUT_URL)
    });

    test('Validate mandatory fields', async ({ checkoutPage }) => {
        await checkoutPage.clickContunueBtn();
        await expect(await checkoutPage.getMandatoryFieldsError())
            .toContainText('Error: First Name is required');

        await checkoutPage.fillFormInputField(0, 'test') 
        await checkoutPage.clickContunueBtn();
        await expect(await checkoutPage.getMandatoryFieldsError())
            .toContainText('Error: Last Name is required');

        await checkoutPage.fillFormInputField(1, 'test') 
        await checkoutPage.clickContunueBtn();
        await expect(await checkoutPage.getMandatoryFieldsError())
            .toContainText('Error: Postal Code is required');
    })
    
})
