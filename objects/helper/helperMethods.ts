import { Locator } from "@playwright/test";

class HelperMethods{

    async getItemsInnerText(locator: Locator){
        return await locator.allInnerTexts()
    }
}export default HelperMethods;