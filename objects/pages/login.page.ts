import BasePage from "./base.page";

class LoginPage extends BasePage{

    constructor(page){
        super(page);
    }

    //LOCATORS
    private readonly userName = this.page.locator('[data-test="username"]');
    private readonly password = this.page.locator('[data-test="password"]');
    private readonly loginBtn = this.page.locator('[data-test="login-button"]');

    //METHODS

    async loginUser(userName: string, password: string){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}