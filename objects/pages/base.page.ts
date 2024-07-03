import { Page } from "@playwright/test";

class BasePage{

    page: Page;

    constructor(page){
        this.page = page;
    }

    async navigate(url){
        await this.page.goto(url);
    }

}export default BasePage;