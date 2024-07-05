import { Locator } from "@playwright/test";
import BasePage from "./base.page";

class HomePage extends BasePage{
    constructor(page){
        super(page);
    }

    //LOCATORS
    private readonly title: Locator = this.page.locator('.title');
    private readonly burgerMenu: Locator = this.page.getByTestId('react-burger-menu-btn');
    private readonly burgerMenuItems: Locator = this.page.locator('.bm-item-list a');
    private readonly products: Locator = this.page.locator('.inventory_item_name');

    //METHODS
    async getHomeTitleText(){
        return await this.title.textContent()
    }

    async clickOnBurgerMenu(){
        await this.burgerMenu.click();
    }

    async getBurgerMenuItems(){
        return await this.helper.getItemsInnerText(this.burgerMenuItems)
    }

    async getProductNames(){
        return await this.helper.getItemsInnerText(this.products);
    }
}export default HomePage;