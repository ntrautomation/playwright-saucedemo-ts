import { Locator } from "@playwright/test";

class HelperMethods{

    async getItemsInnerText(locator: Locator){
        return await locator.allInnerTexts()
    }

    async splitTextFromElement(locator: Locator, splitter: string, i: number){
        const text = locator.innerText();
        const value = (await text).split(splitter);
        return value[i]
    }
}export default HelperMethods;