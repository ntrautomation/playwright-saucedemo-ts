import { test as base } from '@playwright/test'

import HomePage from "@objects/pages/home.page";
import LoginPage from "@pages/login.page";
import CartPage from '@objects/pages/cart.page';
import CheckoutPage from '@objects/pages/checkout.page';

interface PageObjects {
    loginPage : LoginPage;
    homePage : HomePage;
    cartPage : CartPage;
    checkoutPage : CheckoutPage;
}

export const test = base.extend<PageObjects>({
    loginPage: async({page}, user) => {
        await user(new LoginPage(page))
    },

    homePage: async({page}, user) => {
        await user(new HomePage(page))
    },

    cartPage: async({page}, user) => {
        await user(new CartPage(page))
    },

    checkoutPage: async({page}, user) => {
        await user(new CheckoutPage(page))
    }
})

export { expect } from '@playwright/test';