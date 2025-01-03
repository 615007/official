const { Given, When, Then } = require('@cucumber/cucumber');



Then('Navigating into the Stories Module',  async function () {
    console.log('Navigating into the Stories Module');
    await expect(page.getByTestId('header-tab-1')).to.exist;
    await page.getByTestId('header-tab-1').click();
    await page.waitForTimeout(5000);


});

Then('User is on Stories screen', async function () {
    console.log('User is on Stories screen');
    await expect(page.getByRole('heading', { name: 'Jira project name: UPSHIFT' })).to.exist;
});


Then('User is on Issues by Status section', async function () {
    console.log('User is on Issues by Status section');
    await expect(page.getByText('Issues by Status')).to.exist;
    await expect(page.locator('canvas').first()).to.exist;
});

Then('User is on Requests by Priority section', async function () {
    console.log('User is on Requests by Priority section');
    await expect(page.getByText('Open Requests by Priority')).to.exist;
    await expect(page.locator('canvas').nth(1)).to.exist;
    


});

Then('The system displays the Stories module with count of Task,Story,Bug,Epic,Feature and Chore', async function () {
    console.log('The system displays the Stories module with count of Task,Story,Bug,Epic,Feature and Chore');
    await expect(page.getByText('Task')).to.exist;
    await expect(page.locator('p').filter({ hasText: 'Story' })).to.exist;
    await expect(page.getByText('Bug')).to.exist;
    await expect(page.getByText('Epic')).to.exist;
    await expect(page.getByText('Feature')).to.exist;
    await expect(page.getByText('Chore')).to.exist;

}); 

 
Then('The system displays the Stories module with tabular structure containing Id,Story,Status,Points and Priority headers', async function () {
    console.log('The system displays the Stories module with tabular structure containing Id,Story,Status,Points and Priority headers');
    
    await expect(page.getByRole('cell', { name: 'Id' })).to.exist;
    await expect(page.getByRole('cell', { name: 'Story' })).to.exist;
    await expect(page.getByRole('cell', { name: 'Status' })).to.exist;
    await expect(page.getByRole('cell', { name: 'Points' })).to.exist;
    await expect(page.getByRole('cell', { name: 'Priority' })).to.exist;
}); 

