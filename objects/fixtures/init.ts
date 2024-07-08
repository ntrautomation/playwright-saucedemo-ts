import { test as base } from '@playwright/test'

import HomePage from "@objects/pages/home.page";
import LoginPage from "@pages/login.page";

interface PageObjects {
    loginPage : LoginPage;
    homePage : HomePage;
}

export const test = base.extend<PageObjects>({
    loginPage: async({page}, user) => {
        await user(new LoginPage(page))
    },

    homePage: async({page}, user) => {
        await user(new HomePage(page))
    }
})