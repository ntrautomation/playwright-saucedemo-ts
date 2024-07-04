import BasePage from "./base.page";

class HomePage extends BasePage{
    constructor(page){
        super(page);
    }

    //LOCATORS
    private readonly title = this.page.locator('.title');

    //METHODS
    async getHomeTitleText(){
        return await this.title.textContent()
    }
}export default HomePage;