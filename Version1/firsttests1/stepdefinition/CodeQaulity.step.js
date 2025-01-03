const { Given, When, Then } = require('@cucumber/cucumber');


Then('Navigating into the CodeQaulity Module', async function () {
    console.log('Navigating into the CodeQaulity Module');
    await page.getByTestId('header-tab-4').click();
    await expect(page.getByTestId('header-tab-4')).to.exist;
    await page.waitForTimeout(5000);
});




Then('User is on CodeQaulity screen', async function () {
    console.log('User is on CodeQaulity screen');
    //await page.getByRole('heading', { name: 'Code Quality' }).to.exist;
    await expect(page.getByRole('heading', { name: 'Code Quality' })).to.exist;
   


});


Then('The user is able to View the last scan date and Quality gate status', async function () {
    console.log('The User is able to View the last scan date and Quality gate status');
    //await page.getByText('Last Scan Date 21-6-').to.exist;
    //await page.getByText('QUALITY GATE STATUS').to.exist;
    await expect(page.getByText('Last Scan Date 21-6-')).to.exist;
  await expect(page.getByText('QUALITY GATE STATUS')).to.exist;
  await expect(page.getByText('Passed', { exact: true })).to.exist;
  
    //await page.getByText('Passed', { exact: true }).to.exist;
    //await page.getByText('All conditions passed').to.exist;
  
});


Then('The user is able to View the field Bugs Vulnerabilities Code smells Coverage Duplications and Hotspots Reviewed', async function () {
    console.log('The user is able to View the field Bugs Vulnerabilities Code smells Coverage Duplications and Hotspots Reviewed');
    
    
        //await page.getByText('Bugs', { exact: true }).to.exist;
   // await page.getByText('Coverage').to.exist;
   // await page.getByText('Vulnerabilities', { exact: true }).to.exist;
    //await page.getByText('Code Smells', { exact: true }).to.exist;
    //await page.getByText('Duplications').to.exist;
    //await page.getByText('Hotspots Reviewed').to.exist;

    await expect(page.getByText('Bugs', { exact: true })).to.exist;
    await expect(page.getByText('Coverage')).to.exist;
    await expect(page.getByText('Vulnerabilities', { exact: true })).to.exist;
    await expect(page.getByText('Code Smells', { exact: true })).to.exist;
    await expect(page.getByText('Duplications')).to.exist;
    await expect(page.getByText('Hotspots Reviewed')).to.exist;
    

});


Then('The user is able to View the Quality gate trend under Header All scans', async function () {
    console.log('The user is able to View the Quality gate trend under Header All scans');
    //await page.getByText('All Scans').to.exist;
    //await page.getByText('Quality Gate Trend').to.exist;
   
    await expect(page.getByText('All Scans')).to.exist;
    await expect(page.getByText('Quality Gate Trend')).to.exist;

 });

Then('The user is able to view Bugs and Code Smells and Vulnerabilities Trend Chart under Header All scans', async function () {
    console.log('The User is able to view Bugs and Code Smells and Vulnerabilities Trend Chart under Header All scans'); 
    //await page.getByText('Bugs - Code Smells -').to.exist;
    await expect(page.getByText('Bugs - Code Smells -')).to.exist;
 
});