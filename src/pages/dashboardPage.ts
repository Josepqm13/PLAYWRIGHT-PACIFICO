import { Page } from 'playwright';
import { expect } from "@playwright/test";


export default class DashboardPage{
    private Elements = {
        dashboardTitle: "//header/div[1]/div[1]/span[1]/h6[1]",
        usernameInput: "//input[@name='username']",
        pimBtn: "//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a",
        pimTitle: "//*[@id='app']/div[1]/div[1]/header/div[1]/div[1]/span/h6",
        
    }
    
    async loginSuccess(){
        await global.page.waitForSelector(this.Elements.dashboardTitle);
        await expect(global.page.locator(this.Elements.dashboardTitle)).toBeVisible();
    }

    async stayOnCurrentPage() {
        //await global.page.goto(process.env.BASEURL, {timeout: 15000 });
        await global.page.waitForSelector(this.Elements.dashboardTitle); 
        await expect(global.page.locator(this.Elements.dashboardTitle)).toBeVisible();       
          }

    async navigateToPimPage() {
        await global.page.click(this.Elements.pimBtn);
        
    }
}
