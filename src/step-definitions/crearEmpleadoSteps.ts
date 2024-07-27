import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import PimPage from "../pages/pimPage";
import { PickleNameFilter } from "@cucumber/cucumber/lib/pickle_filter";
import PersonalDetailsPage from "../pages/personalDetailsPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const pimPage = new PimPage();
const personalDetailsPage = new PersonalDetailsPage();

Given('que estoy en la página de OrangeHRM', async ()=> {
    await loginPage.navigateToOrangePage();
})

When('ingreso mis credenciales username {string} y password {string}', async (user, password)=> {
    await loginPage.login(user, password);
})

Then('el inicio de sesión es satisfactorio', async ()=> {
    await dashboardPage.loginSuccess();
})

//---------------------------------------------------------

When('hago clic en la opción PIM en el menú lateral', async () => {
    await dashboardPage.navigateToPimPage();
});

Then('se muestra la pantalla de la lista de empleados', async () => {
    await pimPage.verifyPimPage();
});

When('hago clic en el botón ADD EMPLOYEE', async () => {
    await pimPage.clickAddEmployee();
});

Then('se muestra la pantalla de creación de empleado', async () => {
    await pimPage.verifyAddEmployeePage();
    
});

When('ingreso los datos del empleado en firstName {string}, middleName {string} , lastName {string} y employeeId {string}', async (firstName,middleName,lastName,employeeId) => {
    await pimPage.createEmployee(firstName,middleName,lastName,employeeId);
});

Then('la creacion fue exitosa y me muestra la pantalla personalDetails', async () => {
    await personalDetailsPage.createSuccess();
    
});

When('me dirijo a la pantalla employeeList', async () => {
    await pimPage.redirectEmployeeList();
    
});

Then('visualizo los datos del empleado creado', async () => {
    await pimPage.showEmployeList();
    
});










/*Given('que he iniciado sesión en OrangeHRM', async ()=> {
    
    //await loginPage.login('username', 'password');
    //await dashboardPage.loginSuccess();
    await dashboardPage.stayOnCurrentPage();
})

When('hago clic en la opción PIM en el menú lateral', async ()=> {
    await dashboardPage.navigateToPimPage();
});

Then('se muestra la pantalla de la lista de empleados', async ()=> {
    //await dashboardPage.loginSuccess();
    await global.page.waitForSelector('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/a');
})
*/
