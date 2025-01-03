const { Given, When, Then } = require('@cucumber/cucumber');


Then('User click on filer and user search for auto and click Jira', async function () {
    console.log('User click on filer and user search for auto and click Jira');
    await page.getByPlaceholder('Filter').click();
    await page.getByPlaceholder('Filter').fill('Jira');
    await page.getByRole('link', { name: 'Jira' }).click();
    

});

Then('User is on Docs screen', async function () {
    console.log('User is on Docs screen');
    await page.getByTestId('header-tab-6').click();
    await page.waitForTimeout(3000);

    await expect(page.getByTestId('header-tab-6')).to.exist;
    await expect(page.getByRole('heading', { name: 'Ticket Booking' })).to.exist;
    
});


Then('The system displays the Docs module with the list of available documents in the left pane for selected component', async function () {
    console.log('The system displays the Docs module with the list of available documents in the left pane for selected component');
    //await expect(page.getByRole('navigation', { name: 'Table of contents' }).locator('label')).to.exist;   
    await page.getByRole('link', { name: 'Flowsource', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Ticket Booking', exact: true }).click();
    await page.waitForTimeout(3000);
});

//Table

Then('The system displays the Docs module with Table of Contents in the right side', async function () {
    console.log('The system displays the Docs module with Table of Contents in the right side');
    await expect(page.getByRole('navigation', { name: 'Table of contents' }).locator('label')).to.exist;
    await expect(page.locator('[id="\\31 -introduction"]')).to.exist;
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'System Architecture' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Testing' }).click();
    //await page.getByRole('link', { name: 'Purpose' }).first().click();
  
});

//Chat

Then('The system displays the Chatbot icon in Docs module for selected component', async function () {
    console.log('The system displays the Chatbot icon in Docs module for selected component');
    await expect(page.getByRole('button').nth(3)).to.exist;
    await page.getByRole('button').nth(3).click();
    await page.waitForTimeout(3000);
    await page.locator('div').filter({ hasText: /^Virtual Agent$/ }).getByRole('button').click();

    await page.waitForTimeout(3000);
});