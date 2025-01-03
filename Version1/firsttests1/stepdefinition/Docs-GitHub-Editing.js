const { Given, When, Then } = require('@cucumber/cucumber');




Then('User navigate into Docs to GitHub Editing', async function () {
    console.log('User navigate into Docs to GitHub Editing');

    await page.getByTestId('header-tab-6').click();
    await page.waitForTimeout(4000);
    
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Edit this page' }).click();
    const page2 = await page2Promise;
    await page2.getByRole('button', { name: 'Continue' }).click();

    //await page2.getByLabel('Username or email address').fill('615007');
    //await page2.getByLabel('Username or email address').press('Tab');
    //await page2.getByLabel('Password').fill('check$861');
    //await page2.getByRole('button', { name: 'Sign in' }).click();
    //await page2.getByRole('button', { name: 'Verify' }).click();
    //await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    //await page2.goto('https://login.microsoftonline.com/de08c407-19b9-427d-9fe8-edf254300ca7/login');
    //await page2.getByRole('button', { name: 'Cancel' }).click();
    //await page2.locator('[data-test-id="\\36 15007\\@cognizant\\.com"]').click();
    //await page2.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
   // await page2.getByLabel('Don\'t show this again').check();
    await page2.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(7000);
    
});
