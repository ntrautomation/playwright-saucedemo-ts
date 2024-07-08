import { Env } from "@objects/envConfig/env";
import { FullConfig, chromium } from "@playwright/test";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
async function globalLogin(config: FullConfig){
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(process.env.BASE_URL);
    
    //login
    await page.locator('[data-test="username"]')
        .fill(process.env.USER_NAME);
    await page.locator('[data-test="password"]')
        .fill(process.env.PASSWORD);
    await page.locator('[data-test="login-button"]')
        .click();

    await page.context().storageState({ path: Env.LOGGED_STATE_PATH});
    await browser.close();
}
export default globalLogin;