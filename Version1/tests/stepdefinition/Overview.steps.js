const { Given, When, Then } = require('@cucumber/cucumber');



Then('User is on Overview first screen', async function () {
    console.log('User is on Overview first screen');
    await expect(page.getByTestId('header-tab-0')).to.exist;
    await page.waitForTimeout(3000);


});


Then('User view details in About section', async function () {
    console.log('User view details in About section');
    await expect(page.getByText('About')).to.exist;
    await page.waitForTimeout(3000);
});

Then('View source link is displayed', async function () {
    console.log('View source link is displayed');
    await expect(page.getByRole('link', { name: 'View Source , Opens in a new' })).to.exist;
    await page.waitForTimeout(3000);

});
        
Then('View Techdocs link is displayed', async function () {
    console.log('View Techdocs link is displayed');
    await expect(page.getByRole('link', { name: 'View TechDocs' })).to.exist;
    await page.waitForTimeout(3000);


});

Then('Schedule refresh entity link is displayed', async function () {
    console.log('Schedule refresh entity link is displayed');
    await expect(page.getByLabel('Refresh')).to.exist;
    await page.waitForTimeout(3000);

}); 
        
Then('Edit metadata link is displayed', async function () {
    console.log('Edit metadata link is displayed');
    await expect(page.getByLabel('Edit, Opens in a new window')).to.exist;
    await page.waitForTimeout(3000);

}); 


        
Then('Description is displayed', async function () {
    console.log('Description is displayed');
    await expect(page.getByRole('heading', { name: 'Description' })).to.exist;
    await page.waitForTimeout(3000);

}); 


        
Then('System is displayed', async function () {
    console.log('System is displayed');
    await expect(page.getByRole('heading', { name: 'System' })).to.exist;
  
    await page.waitForTimeout(3000);

}); 
        
Then('Parent component is displayed', async function () {
    console.log('Parent component is displayed');
    await expect(page.getByRole('heading', { name: 'Parent Component' })).to.exist;
    await page.waitForTimeout(3000);

}); 
        
Then('Type is displayed', async function () {
    console.log('Type is displayed');
    await expect(page.getByRole('heading', { name: 'Type' })).to.exist;
    await page.waitForTimeout(3000);

}); 
        
Then('Lifecycle is displayed', async function () {
    console.log('Lifecycle is displayed');
    await expect(page.getByRole('heading', { name: 'Lifecycle' })).to.exist;
    await page.waitForTimeout(3000);

}); 
        
Then('Tag is displayed', async function () {
    console.log('Tag is displayed');
    await expect(page.getByRole('heading', { name: 'Tags' })).to.exist;
    await page.waitForTimeout(3000);

}); 

Then('Relations is displayed', async function () {
    console.log('Relations is displayed');
    await expect(page.getByText('Relations', { exact: true })).to.exist;

});

Then('View graph is displayed', async function () {
    console.log('View graph is displayed');   
    await expect(page.getByRole('link', { name: 'View graph' })).to.exist;
});

Then('FooterLinks is displayed', async function () {
    console.log('FooterLinks is displayed');   
    await expect(page.getByText('Links')).to.exist;

    await expect(page.locator('div').filter({ hasText: /^Source Code, Opens in a new window$/ }).nth(2)).to.exist;
    await expect(page.locator('div').filter({ hasText: /^Deployed Application - Dashboard, Opens in a new window$/ }).nth(1)).to.exist;
    await expect(page.getByRole('link', { name: 'Deployed Application - Shows' })).to.exist;
    await expect(page.getByRole('link', { name: 'Deployed Application - Select' })).to.exist;

});

Then('Has subcomponents is displayed', async function () {
    console.log('Has subcomponents is displayed');   
    await expect(page.getByRole('heading', { name: 'Has subcomponents' })).to.exist;
    await expect(page.getByRole('button', { name: 'Name' })).to.exist;
    await expect(page.getByRole('button', { name: 'Owner' })).to.exist;
    await expect(page.getByRole('columnheader', { name: 'Type' })).to.exist;
    await expect(page.getByRole('button', { name: 'Lifecycle' })).to.exist;
    await expect(page.getByRole('button', { name: 'Description' })).to.exist;
});




