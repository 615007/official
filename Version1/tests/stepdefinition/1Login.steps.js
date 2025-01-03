const { Given, When, Then } = require('@cucumber/cucumber');


Given('the user is on the GitHub login page', async function () {
    console.log('the user is on the GitHub login page');
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component&filters%5Buser%5D=all\\');

    this.page1Promise = page.waitForEvent('popup');
    //await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
    await page.locator('li').filter({ hasText: 'KeycloakSign in using' }).getByRole('button').click();
    this.page1 = await this.page1Promise;


});


When('the user enters valid username and password', async function () {
    console.log('the user enters valid username and password');
    const page1 = await this.page1Promise;
    console.log('User enter the credentials and click the signin');
    await page1.getByLabel('Username or email').fill('catalog-admin');
    await page1.getByLabel('Password', { exact: true }).click();
    await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
    await page1.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(3000);

});




Then('the user is on Catalog page', async function() {
    console.log('the user is on Catalog page');
    await expect(page.getByText('Catalog')).to.exist;

});
 


Given('the user is on the Catalog page2', async function(){
    console.log('the user is on the Catalog page2');
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component&filters%5Buser%5D=all\\');
    this.page1Promise = page.waitForEvent('popup');
    //await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
    await page.locator('li').filter({ hasText: 'KeycloakSign in using' }).getByRole('button').click();
    this.page1 = await this.page1Promise;
    const page1 = await this.page1Promise;
    console.log('User enter the credentials and click the signin');
    await page1.getByLabel('Username or email').fill('catalog-admin');
    await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
    await page1.getByLabel('Show password').click();
    await page1.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(3000);

});




When('the user clicks on the settings option and clicks on Sign Out option in the General tab', async function(){
    console.log('the user clicks on the settings option and clicks on Sign Out option in the General tab');
    
    await page.getByLabel('Settings').click();
    await page.waitForTimeout(3000);
    await page.getByTestId('user-settings-menu').click();
    await page.waitForTimeout(3000);
    await page.getByTestId('sign-out').click();
    await page.waitForTimeout(3000);
});

Then('the user is logged out from the application', async function() {
    console.log('the user is logged out from the application');
    await page.waitForTimeout(3000);
    await expect(page.getByText('Catalog')).to.exist;

});