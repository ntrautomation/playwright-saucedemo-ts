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
    private readonly sortDropDown: Locator = this.page.locator('.product_sort_container')
   // private readonly sortOptions = (option: string) => this.sortDropDown.getByRole("option", {name: option});

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

    async selectOrderByOption(option: string){
        await this.sortDropDown.click();
        await this.sortDropDown.selectOption({value: option});
    }
}export default HomePage;