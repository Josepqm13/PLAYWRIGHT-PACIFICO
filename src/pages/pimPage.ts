import { expect } from "@playwright/test";

export default class PimPage{
    private Elements = {
        pimTitle: "//*[@id='app']/div[1]/div[1]/header/div[2]/nav/ul/li[2]/a",
        addButton: "//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[1]/button",
        addEmployeeTitle: "//*[@id='app']/div[1]",
        firstNameInput: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input",
        middleNameInput: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[2]/div[2]/input",
        lastNameInput: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input",
        saveBtn: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]", 
        employeeListBtn: "//*[@id='app']/div[1]/div[1]/header/div[2]/nav/ul/li[2]/a",
        employeeIdInput: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input"

    }

    async loginSuccess(){
        await global.page.waitForSelector(this.Elements.pimTitle);
        await expect(global.page.locator(this.Elements.pimTitle)).toBeVisible();
    }

    async verifyPimPage(){
        await global.page.waitForSelector(this.Elements.pimTitle);
        await expect(global.page.locator(this.Elements.pimTitle)).toBeVisible();
    }

    async clickAddEmployee() {
        await global.page.click(this.Elements.addButton);
    }

    async verifyAddEmployeePage() {
        await global.page.waitForSelector(this.Elements.addEmployeeTitle);
        await expect(global.page.locator(this.Elements.addEmployeeTitle)).toBeVisible();
        
    }

    async createEmployee(firstName: string, middleName: string, lastName: string, employeeId: string) {
        await global.page.waitForSelector(this.Elements.firstNameInput);
        await global.page.type(this.Elements.firstNameInput, firstName);
        await global.page.type(this.Elements.middleNameInput, middleName);
        await global.page.type(this.Elements.lastNameInput, lastName);
        await global.page.type(this.Elements.employeeIdInput, employeeId);
        await global.page.click(this.Elements.saveBtn);
    }

    async redirectEmployeeList(){
        await global.page.waitForTimeout(5000);
        await global.page.click(this.Elements.employeeListBtn);  
        await expect(global.page.locator(this.Elements.employeeListBtn)).toBeVisible();

    }

    async showEmployeList(){
        await global.page.waitForTimeout(10000);
        await global.page.waitForSelector(this.Elements.pimTitle);
        await expect(global.page.locator(this.Elements.pimTitle)).toBeVisible();
    }
}
