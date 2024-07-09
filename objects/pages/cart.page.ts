import { Locator } from "@playwright/test";
import BasePage from "./base.page";

class CartPage extends BasePage{
    constructor(page){
        super(page);
    }

    //LOCATORS
    private readonly yourCart: Locator = this.page.locator('.title');
    private readonly qty: Locator = this.page.locator('.cart_quantity_label');
    private readonly description: Locator = this.page.locator('.cart_desc_label');
    private readonly continueShoppingBtn: Locator = this.page.getByTestId('continue-shopping');
    private readonly checkout: Locator = this.page.getByTestId('checkout');
    private readonly inventoryItemName: Locator = this.page.locator('.inventory_item_name')

    pageElements(i: number){
        const listOfElements: Locator[]
            = [this.yourCart, this.qty, this.description, 
                this.continueShoppingBtn, this.checkout];
        return listOfElements[i];
    }

    async getItemName(i: number){
        return await this.inventoryItemName.nth(i).innerText();
    }
}export default CartPage