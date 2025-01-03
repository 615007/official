const { Given, When, Then } = require('@cucumber/cucumber');



Then('User navigate into Overview to Github viewsource', async function () {
    console.log('User navigate into Overview to Github viewsource');
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
    const page2 = await page2Promise;
    await page2.getByLabel('Username or email address').click();
    await page2.getByLabel('Username or email address').fill('615007');
    await page2.getByLabel('Password').click();
    await page2.getByLabel('Password').fill('check@861');
    await page2.getByRole('button', { name: 'Sign in' }).click(); 
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.waitForTimeout(4000);
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
    const page3 = await page3Promise;
    await page3.getByRole('button', { name: 'Continue' }).click();
    await page3.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page3.getByRole('button', { name: 'Next' }).click();
    await page3.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page3.getByRole('button', { name: 'Sign in' }).click(); 
    await page3.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(4000);

});
 

/*Then('User navigate into Overview to Github viewsource2', async function () {
    console.log('User navigate into Overview to Github viewsource2');
    const page2Promise = page.waitForEvent('popup');
    
    const page2 = await page2Promise;
    await page2.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(7000);
    await page2.close();

});


*/

Given('The user is on the GitHub access login2', async function () {
    console.log('The user is on the GitHub access login2');
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('li').filter({ hasText: 'GitHubSign in using' }).getByRole('button').click();
    const page1 = await page1Promise;
    await page1.getByLabel('Username or email address').fill('615007');
    await page1.getByLabel('Password').click();
    await page1.getByLabel('Password').fill('check$861');
    await page1.getByRole('button', { name: 'Sign in', exact: true }).click();
  //await page1.getByPlaceholder('XXXXXX').fill('587627');
    await page1.getByRole('link', { name: 'Continue' }).click();
  //await page1.getByRole('button', { name: 'Authorize TheCognizantFoundry' }).click();
    //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
    await page.getByPlaceholder('Filter').click();
    await page.getByPlaceholder('Filter').fill('auto');
    await page.getByRole('link', { name: 'TicketBookingAutomation' }).click();

});

When('User navigate into Overview to Github viewsource2', async function () {
    console.log('User navigate into Overview to Github viewsource2');
    
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
    const page2 = await page2Promise;
  
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
  //await page2.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
    await page2.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(7000);
    await page2.close();


});