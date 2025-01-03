const { Given, When, Then } = require('@cucumber/cucumber');


Then('User navigate into Coderepository to Github Actions', async function () {
    console.log('The user is on the GitHub access login');
    await page.getByTestId('header-tab-3').click();
    await page.waitForTimeout(4000);
    await page.getByRole('button', { name: 'Basic workflow demo' }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Update catalog-info.yaml' }).first().click();
    const page2 = await page2Promise;
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(4000);
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
  //await page2.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
    await page2.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(9000);
  

});

