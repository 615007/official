const { Given, When, Then } = require('@cucumber/cucumber');



Then('Navigating into the CICD Module', async function () {
    console.log('Navigating into the CICD Module');
    await page.getByTestId('header-tab-3').click();
    await expect(page.getByTestId('header-tab-3')).to.exist;
});



Then('User is on CICD screen', async function () {
    console.log('User is on CICD screen');
    await expect(page.getByText('TheCognizantFoundry/')).to.exist;


});


Then('The user is able to View the Passed Jobs in Pipeline with Header', async function () {
    console.log('Then user is able to View the Passed Jobs in Pipeline with Header');

    await expect(page.getByRole('button', { name: 'Basic workflow demo' })).to.exist;
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Basic workflow demo' }).click();
    await expect(page.getByRole('link', { name: 'Update catalog-info.yaml' }).first()).to.exist;
    await expect(page.getByText('ID: 10296801390')).to.exist;
    await expect(page.getByText('11s').first()).to.exist;
    await expect(page.getByLabel('Basic workflow demo').locator('div').filter({ hasText: 'Update catalog-info.yamlID: 1029680139011sUpdate catalog-info.yamlID:' }).first()).to.exist; 
    await page.getByRole('button', { name: 'Basic workflow demo' }).click();

});


Then('The user is able to View the Failed Jobs in Pipeline with Header', async function () {
    console.log('Then the user is able to View the Failed Jobs in Pipeline with Header');
    await page.waitForTimeout(2000);
    await expect(page.getByRole('button', { name: 'TicketBooking-Pipeline' })).to.exist;
    await page.getByRole('button', { name: 'TicketBooking-Pipeline' }).click();
    await expect(page.getByRole('link', { name: 'Update pipeline.yml' }).first()).to.exist;
    await expect(page.getByText('ID: 10447066139')).to.exist;
    await expect(page.getByText('4m 8s')).to.exist;
    await expect(page.getByLabel('TicketBooking-Pipeline').locator('div').filter({ hasText: 'Update pipeline.ymlID: 104470661394m 8sUpdate catalog-info.yamlID:' }).nth(3)).to.exist;
    await page.getByRole('button', { name: 'TicketBooking-Pipeline' }).click();

});