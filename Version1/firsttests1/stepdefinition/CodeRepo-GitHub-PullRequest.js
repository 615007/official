const { Given, When, Then } = require('@cucumber/cucumber');



Given('The user is on the GitHub access login', async function () {
    console.log('The user is on the GitHub access login');
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('li').filter({ hasText: 'GitHubSign in using' }).getByRole('button').click();
    const page1 = await page1Promise;
    
    await page1.getByLabel('Username or email address').fill('615007');
    await page1.getByLabel('Password').click();
    await page1.getByLabel('Password').fill('check$861');
    await page1.getByRole('button', { name: 'Sign in', exact: true }).click();
    //await page.waitForTimeout(5000);
    await page1.getByRole('link', { name: 'Continue' }).click();
});



//Then('User enter the Git credentials and click the signin', async function () {
  //  console.log('User enter the Git credentials and click the signin');

When('Git click on filer and user search for auto and click TicketBookingAutomation', async () => {
    console.log('Git click on filer and user search for auto and click TicketBookingAutomation');        
    await page.getByPlaceholder('Filter').click();
    await page.getByPlaceholder('Filter').fill('auto');
    await page.getByRole('link', { name: 'TicketBookingAutomation' }).click();

    });

Then('User navigate into Coderepository to Github PullRequest', async function () {
    console.log('User navigate into Coderepository to Github PullRequest');          
    await page.getByTestId('header-tab-2').click();
    await page.waitForTimeout(4000);
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Update catalog-info.yaml' }).click();
    const page2 = await page2Promise;
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
  //await page2.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
    await page2.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(9000);
  
});