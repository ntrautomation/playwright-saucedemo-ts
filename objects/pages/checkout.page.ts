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
}export default CheckoutPage;