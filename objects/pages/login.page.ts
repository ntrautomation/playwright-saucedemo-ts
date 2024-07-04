import BasePage from "./base.page";

class LoginPage extends BasePage{

    constructor(page){
        super(page);
    }

    //LOCATORS
    private readonly userName = this.page.locator('[data-test="username"]');
    private readonly password = this.page.locator('[data-test="password"]');
    private readonly loginBtn = this.page.locator('[data-test="login-button"]');

    private readonly errorMsg = this.page.locator('//h3');
    //METHODS

    async loginUser(user: IUser){
        await this.userName.fill(user.userName);
        await this.password.fill(user.password);
        await this.loginBtn.click();
    }

    async getErrorMessageText(){
        return await this.errorMsg.textContent();
    }
}export default LoginPage;