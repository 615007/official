const { Given, When, Then } = require('@cucumber/cucumber');




Then('Navigating into the CodeRepository Module', async function () {
    console.log('Navigating into the CodeRepository Module');

    await page.getByTestId('header-tab-2').click();
    await expect(page.getByTestId('header-tab-2')).to.exist;
});

Then('User is on CodeRepository screen', async function () {
    console.log('User is on CodeRepository screen'); 
    await expect(page.getByText('Github Pull Requests')).to.exist;

});

Then('User is on PR Trend section', async function () {
    console.log('User is on PR Trend section');
    await expect(page.getByText('PR Trend')).to.exist;
    await expect(page.getByRole('img').nth(2)).to.exist;

});

Then('User is on PR Aging section', async function () {
    console.log('User is on PR Aging section');
    await expect(page.getByText('PR Aging')).to.exist;
    await expect(page.getByRole('img').nth(3)).to.exist;   
});

Then('The system displays the CodeRepository module with TheCognizantFoundry', async function () {
    console.log('The system displays the CodeRepository module with TheCognizantFoundry');
    await expect(page.getByRole('heading', { name: 'TheCognizantFoundry/' })).to.exist;
    await expect(page.locator('div').filter({ hasText: /^TheCognizantFoundry\/TicketBooking$/ }).first()).to.exist;
  
}); 

Then('The system displays the CodeRepository module with tabular structure containing Id,TITLE,CREATOR,CREATED,LASTUPDATED headers', async function () {
    console.log('The system displays the CodeRepository module with tabular structure containing Id,TITLE,CREATOR,CREATED,LASTUPDATED headers');
    await expect(page.getByRole('cell', { name: 'ID' })).to.exist;
    await expect(page.getByRole('cell', { name: 'TITLE' })).to.exist;
    await expect(page.getByRole('cell', { name: 'CREATOR' })).to.exist;
    await expect(page.getByRole('cell', { name: 'CREATED' })).to.exist;
    await expect(page.getByRole('cell', { name: 'LAST UPDATED' })).to.exist;
});
