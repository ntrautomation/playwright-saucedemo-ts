import BasePage from "./base.page";

class HomePage extends BasePage{
    constructor(page){
        super(page);
    }

    //LOCATORS
    private readonly title = this.page.locator('.title');
    private readonly burgerMenu = this.page.getByTestId('react-burger-menu-btn');
    private readonly burgerMenuItems = this.page.locator('.bm-item-list a');

    //METHODS
    async getHomeTitleText(){
        return await this.title.textContent()
    }

    async clickOnBurgerMenu(){
        await this.burgerMenu.click();
    }

    async getBurgerMenuItems(){
        return await this.burgerMenuItems.allTextContents()
    }
}export default HomePage;