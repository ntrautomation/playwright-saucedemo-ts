import { Page } from "@playwright/test";
import HelperMethods from "@helpers/helperMethods";

class BasePage{

    page: Page;
    helper = new HelperMethods();

    constructor(page){
        this.page = page;
    }

    async navigate(url){
        await this.page.goto(url);
    }

}export default BasePage;