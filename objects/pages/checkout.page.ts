import { Locator } from "@playwright/test";
import BasePage from "./base.page";

class CheckoutPage extends BasePage{

    constructor(page){
        super(page);
    }

    private readonly formInputFileds 
        = (index: number) => this.page.locator(
            "//div[@class = 'form_group']/input").nth(index)
    private readonly firstName: Locator = this.formInputFileds(0);
    private readonly lastName: Locator = this.formInputFileds(1);
    private readonly zipCode: Locator = this.formInputFileds(2);
    private readonly cancelBtn: Locator = this.page.getByTestId('cancel');
    private readonly continueBtn: Locator = this.page.getByTestId('continue');
    private readonly mandatoryFieldsError: Locator = this.page.locator("//h3[@data-test = 'error']");
    
    async clickContunueBtn(){
        await this.continueBtn.click()
    }

    async getMandatoryFieldsError(){
        return await this.mandatoryFieldsError;
    }

    async fillFormInputField(index: number, value: string){
        return await this.formInputFileds(index).fill(value)
    }

    async fillCheckoutForm(){
        await this.firstName.fill('test');
        await this.lastName.fill('test');
        await this.zipCode.fill('12345');
        await this.continueBtn.click();
    }


    //PAGE TWO
    private readonly checkoutItem: Locator = this.page.locator('.inventory_item_name');
    private readonly checkoutItemPrice: Locator = this.page.locator('.inventory_item_price');
    private readonly summaryTax: Locator = this.page.locator('.summary_tax_label');
    private readonly totalPrice: Locator = this.page.locator('.summary_total_label');

    async getTotalPriceText(){
        const x: number =+ await this.helper.splitTextFromElement(
            this.totalPrice, "$", 1
        );
        return x;
    }

    async getTotalPriceWithTax(){
        const x: number =+ await this.helper.splitTextFromElement(
            this.checkoutItemPrice, "$", 1
        );
        const y: number =+ await this.helper.splitTextFromElement(
            this.summaryTax, "$", 1
        );
        return x + y;
    }
}export default CheckoutPage;