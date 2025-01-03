const { Given, When, Then } = require('@cucumber/cucumber');


Then('Navigating into the API Module', async function () {
    console.log('Navigating into the API Module');
    await page.getByTestId('header-tab-5').click();
    await expect(page.getByTestId('header-tab-5')).to.exist;
});


Then('The user is able to View the Provided API section with Header and API list', async()=> {
    console.log('The user is able to View the Provided API section with Header and API list');

    await page.getByRole('heading', { name: 'Provided APIs' }).isVisible();
    await page.getByRole('heading', { name: 'Consumed APIs' }).isVisible();
    await page.getByRole('button', { name: 'Name' }).first().isVisible();
    await page.getByRole('button', { name: 'System' }).first().isVisible();
    await page.getByRole('button', { name: 'Owner' }).first().isVisible();
    await page.getByRole('button', { name: 'Type' }).first().isVisible();
    await page.getByRole('button', { name: 'Lifecycle' }).first().isVisible();
    await page.getByRole('button', { name: 'Description' }).first().isVisible();
    await page.getByRole('button', { name: 'API Definition' }).first().isVisible();
    await page.waitForTimeout(3000);
 
});


  Then('The User is able to view the Consumed API section with Header and API list', async()=> {
    console.log('The User is able to view the Consumed API section with Header and API list');
    await page.getByRole('button', { name: 'API Definition' }).first().isVisible();
    await page.getByRole('button', { name: 'Name' }).nth(1).isVisible();
    await page.getByRole('columnheader', { name: 'System' }).nth(1).isVisible();
    await page.getByRole('button', { name: 'System' }).nth(1).isVisible();
    await page.getByRole('button', { name: 'Owner' }).nth(1).isVisible();
    await page.getByRole('button', { name: 'Type' }).nth(1).isVisible();
    await page.getByRole('button', { name: 'Lifecycle' }).nth(1).isVisible();
    await page.getByRole('button', { name: 'Description' }).nth(1).isVisible();
    await page.getByRole('button', { name: 'API Definition' }).nth(2).isVisible();
    await page.waitForTimeout(3000);  
  });
 