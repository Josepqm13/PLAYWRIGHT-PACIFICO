import { expect } from "@playwright/test";

export default class PersonalDetailsPage{
    private Elements = {
        personalDetails: "//*[@id='app']/div[1]",  
       
    }


    async createSuccess(){
        await global.page.waitForSelector(this.Elements.personalDetails);
        await expect(global.page.locator(this.Elements.personalDetails)).toBeVisible();
}


}
