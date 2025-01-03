const { Given, When, Then } = require('@cucumber/cucumber');



Then('Verify GitHub Repo tool is displayed', async()=> {
    console.log('Verify GitHub Repo tool is displayed');
    await page.getByTestId('header-tab-2').click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Backstage checkmarx' }).click();
    const page2 = await page2Promise;
    await page2.getByLabel('Username or email address').fill('615007');
    //await page2.getByLabel('Password').click();
    //await page.waitForTimeout(2000);
    await page2.getByLabel('Password').fill('check@861');   
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page2.getByRole('button', { name: 'Continue' }).click();
    
    //await page2.waitForTimeout(3000);
//});

});

Then('Verify Cog access tool is displayed', async()=> {
    console.log('Verify Cog access tool is displayed');

 //   Then('Verify Cog access tool is displayed', async()=> {
   //     console.log('Verify Cog access tool is displayed');


    const page2Promise = page.waitForEvent('popup');
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    const page2 = await page2Promise;

    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    //await page2.waitForTimeout(3000);

    await page2.getByRole('button', { name: 'Yes' }).click();
    await page2.waitForTimeout(4000);
    await page2.close();
});



Then('Verify GitHub action is displayed', async()=> {
    console.log('Verify GitHub action is displayed');
    await page.getByTestId('header-tab-3').click();
    await page.waitForTimeout(4000);
    await page.getByRole('button', { name: 'Basic workflow demo' }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Update catalog-info.yaml' }).first().click();
    const page2 = await page2Promise;
    await page2.getByLabel('Username or email address').fill('615007');
    await page2.getByLabel('Password').click();
    //await page.waitForTimeout(2000);
    await page2.getByLabel('Password').fill('check@861');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(2000);
    //await page2.close();
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page2.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(7000);
    await page2.close();
});



Then('Verify Jira Story is displayed', async()=> {
    console.log('Verify Jira Story is displayed');
    await page.getByTestId('header-tab-1').click();
    await page.waitForTimeout(7000);
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'UPSHIFT-3191' }).click();
    const page2 = await page2Promise;
    await page.waitForTimeout(3000);
    await page2.getByTestId('username').click();
    await page2.getByTestId('username').fill('rajesh.vijay@cognizant.com');
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByTestId('password').click({
    modifiers: ['ControlOrMeta']
  });
    await page2.getByTestId('password').fill('Rv55861$rv55861');
    await page2.getByRole('button', { name: 'Show password' }).click();
    await page2.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(7000);
    //await page2.goto('https://id.atlassian.com/login/authorize?continue=https%3A%2F%2Fcdeproducts.atlassian.net%2Fbrowse%2FUPSHIFT-3191&token=eyJraWQiOiJtaWNyb3MvaWQtYXV0aGVudGljYXRpb24vcXUxNmgwMGYwbGxpNHM4cSIsImFsZyI6IlJTMjU2In0.eyJtYXJrZWRWZXJpZmllZCI6ImZhbHNlIiwibG9naW5UeXBlIjoic2Vzc2lvblJlZnJlc2giLCJjb250YWluZXJUeXBlIjoiZ2xvYmFsIiwiaXNzIjoibWljcm9zL2lkLWF1dGhlbnRpY2F0aW9uIiwidXNlcklkIjoiNWU1NjQyZTliYmI1MTEwYzlhNjg1YjdmIiwidHJhbnNhY3Rpb25JZCI6InVzLWVhc3QtMXw1NDQ5ZGI5My00MTFjLTRjNGItYjI0Mi01YTE2OWQ4NzRkZjYiLCJpc1NsYWNrQXBwU291cmNlIjoiZmFsc2UiLCJhdWQiOiJsaW5rLXNpZ25hdHVyZS12YWxpZGF0b3IiLCJuYmYiOjE3MjI4NTU3NDAsInNjb3BlIjoiTG9naW4iLCJ2ZXJpZmljYXRpb25UeXBlIjoidmVyaWZ5IiwiZXhwIjoxNzIyODU1ODYwLCJpYXQiOjE3MjI4NTU3NDAsImp0aSI6ImIwZjY0YTFiLTY1MjYtNDZmYi1hMDZmLWI2NjVmYmI1ODk4NiIsImhhc2hlZENzcmZUb2tlbiI6IjIzOWM4MDIzNjU3YjRjMDViYTk1OGNlYjhmNDBmYjM2MWE4OWUyNzc5YTNhMTNhOTRmZjkzYjA3ZDVhNTU5MDcifQ.J3O9H-OjaKFOwsTZ51_pcWEAo2q5q3e_Or_kWQ3mYyvP3s6uACPEIaPJ_HSDTmW91hRuFSbiSN2plNYn8ErEXYJY_fKHhvYW03CKS_R-VolUBZf053wRD71Dfch19UZeO0Vrk406uFuxAnqbyMwQB_RtRh2nyIpJJ75hcRu1a5-Yv4WeqGZbB8LIv0e7kKBxEVi9dOpxyDbRa-yz3B6kztgiHXAsguZl0ivZsRk_kdG_C0MgLpNM1RXTmDBvnAMFTzmxAYFVtvmqp1F9F8k6Neu8FRwEKxUj8RtSt1FoRJi5BdWLKPZNlXmuG0z6gTn5LEK-jaq7UHdXsfdcZBVLWQ&state=eyJoYXNoZWRDc3JmVG9rZW4iOiIwM2IyNTQ3MDc5YjY2NzAxNzk5ZjQ3Mzg2YjQ5YTA2YWI3NWU4M2VjZDEwZTFjZWJiZGQwYmU1MmFkYjQyOTE0In0%3D');
    await page2.goto('https://cdeproducts.atlassian.net/browse/UPSHIFT-3191');
    await page.waitForTimeout(7000);
    await page2.close();


});


 
Then('Verify Github View Source link is displayed', async ()=> {
    console.log('Verify Github View Source link is displayed');
    //await page.waitForTimeout(2000);
    // await expect(page.getByRole('link', { name: 'View Source , Opens in a new' })).toBeVisible();
    // const page2Promise = page.waitForEvent('popup');
    // await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
    // const page2 = await page2Promise;
    // await setTimeout(3000);
    // await page2.close();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
    const page2 = await page2Promise;
    await page2.getByLabel('Username or email address').click();
    await page2.getByLabel('Username or email address').fill('615007');
    await page2.getByLabel('Password').click();
    await page2.getByLabel('Password').fill('check@861');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(3000);  
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page2.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(7000);
    await page2.close();
});
    //await page.waitForTimeout(1000);
    //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');




Then('Verify Bitbucket CICD link is displayed', async ()=> {
    console.log('Verify Bitbucket CICD link is displayed');
    await page.getByTestId('header-tab-3').click();
    await page.getByRole('button', { name: 'deployment-to-prod' }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '#47' }).click();
    const page2 = await page2Promise;
    await page.waitForTimeout(7000);
    await page2.close();

    await page.getByRole('button', { name: 'deployment-to-prod' }).click();
    await page.getByRole('button', { name: 'sonar' }).click();
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '#46' }).click();
    const page3 = await page3Promise;
    await page.waitForTimeout(7000);
    await page3.close();
    //await page4.close();
    //await page.getByRole('button', { name: 'staging' }).click();
    //await page.getByRole('button', { name: 'default' }).click();
    //const page5Promise = page.waitForEvent('popup');
    //await page.getByRole('link', { name: '#1', exact: true }).click();
    //const page5 = await page5Promise;
    //await page4.getByRole('link', { name: 'Commits' }).click();
    //await page4.getByRole('link', { name: 'Branches' }).click();
    //await page4.getByRole('link', { name: 'Pull requests' }).click();
    //await page.waitForTimeout(2000);

});

Then('Verify Bitbucket profile log is displayed', async ()=> {
    console.log('Verify Bitbucket profile log is displayed');
    //await page2.goto('https://bitbucket.org/flowsourceplatform/ticketbooking/deployments');
    await page.waitForTimeout(4000);

    await page.getByRole('button', { name: 'sonar' }).click();
    await page.getByRole('button', { name: 'staging' }).click();
    await page.getByRole('heading', { name: '#50' }).click();

    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '#50' }).click();
    const page2 = await page2Promise;

    
    await page.waitForTimeout(2000);
    
    await page2.getByTestId('profile-button').click();
    await page2.getByRole('link', { name: 'Log in' }).click();
    await page2.getByTestId('username').fill('rajesh.vijay@cognizant.com');
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByTestId('password').fill('Rv55861$rv55861');
    await page2.getByRole('button', { name: 'Log in' }).click();
    
    await page2.getByRole('link', { name: 'Repositories' }).click();
    await page2.getByRole('link', { name: 'ticketbooking', exact: true }).click();
    
    await page2.getByRole('link', { name: 'Commits' }).click();
    await page2.getByRole('link', { name: 'Branches' }).click();
    await page2.getByTestId('ContextualNavigation').getByRole('link', { name: 'Pull requests' }).click();
    await page2.getByTestId('ContextualNavigation').getByRole('link', { name: 'Pipelines' }).click();
    await page.waitForTimeout(3000);

});








   //await page.waitForTimeout(2000);
    //test('handle escape key', async ({ page }) => {

    //await page.keyboard.up('Shift');
    //await page.focus('button');
    //await page.keyboard.press('ArrowRight');
    //await page.keyboard.press('Enter');
    //await page.waitForLoadState('networkidle');
    //


//    page.once('dialog', async dialog => {
   // console.log(dialog.message());
   // await dialog.dismiss();
    
//});


    //page.evaluate(() => window.confirm = ()=> true)
    //page.evaluate(() => window.alert = () => {});

    //await page.dismissPopup();

    //const keyToPress='Escape';
    //if(keyToPress!==undefined){
    //await page.press(keyToPress);
    //}
    //await page.keyboard.press('Escape');
   // await page.getByLabel('cancel').click();
    //await page.getByRole('button', { name: 'cancel' }).click();

 //   });


Then('User click on filer and user search for auto and click BitbucketTicketBooking', async ()=>{
    console.log('User click on filer and user search for auto and click BitbucketTicketBooking');
    await page.getByRole('link', { name: 'BitbucketTicketBooking', exact: true }).click();
    await page.waitForTimeout(3000);

});


Then('User click on filer and user search for auto and click TicketBooking12072024', async ()=>{
    console.log('User click on filer and user search for auto and click TicketBooking12072024');
    await page.getByPlaceholder('Filter').click();
    await page.getByPlaceholder('Filter').fill('TicketBooking12072024');
    await page.getByRole('link', { name: 'TicketBooking12072024' }).click();
    await page.getByTestId('header-tab-3').click();
    await page.waitForTimeout(3000);

});

   
    Then('Verify Jenkins profile log is displayed', async ()=>{
    console.log('Verify Jenkins profile log is displayed');
    await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> backstage-awsfis2' }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '#' }).click();
    const page2 = await page2Promise;
    await page2.getByPlaceholder('Username').fill('backstage-service');
    await page.waitForTimeout(3000);
    await page2.getByPlaceholder('Password').click({
      modifiers: ['ControlOrMeta']
    });
    await page2.getByPlaceholder('Password').fill('LaDsU4JqBd');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(3000);
    await page2.close();
    await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> backstage-awsfis2' }).click();
    await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> jenkins-backstage-test' }).click();
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '#4' }).click();
    const page3 = await page3Promise;
    await page.waitForTimeout(3000);
    await page3.close();

});


    Then('Verify Jenkins link is displayed', async ()=>{
    console.log('Verify Jenkins link is displayed');

    await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> jenkins-backstage-test' }).click();
    await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> jenkins-demo' }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '#3' }).click();
    const page2 = await page2Promise;
    await page.waitForTimeout(3000);
    await page2.goto('https://jenkins.cloudsprint.io/job/TicketBookingPipeline(MultiBranch)/job/jenkins-demo/3/changes');
    await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> jenkins-demo' }).click();
    await page.getByRole('button', { name: 'TicketBooking(Freestyle' }).click();
    await page.waitForTimeout(3000);
    await page2.close();

    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '#8' }).click();
    const page3 = await page3Promise;
    await page3.goto('https://jenkins.cloudsprint.io/user/backstage-service/');
    await page3.goto('https://jenkins.cloudsprint.io/user/backstage-service/builds');
    await page3.goto('https://jenkins.cloudsprint.io/user/backstage-service/configure');
    await page3.goto('https://jenkins.cloudsprint.io/user/backstage-service/my-views/view/all/');
    await page3.goto('https://jenkins.cloudsprint.io/user/backstage-service/my-views/view/all/builds');
    await page.waitForTimeout(3000);    
    await page3.close();
});



Then('the User is able to view Bitbucket tool with pull requests', async()=> {
    console.log('the User is able to view Bitbucket tool with pull requests');
    await page.getByTestId('header-tab-2').click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('row', { name: '39 pom.xml edited online with' }).getByRole('link').click();
    const page2 = await page2Promise;
    await page2.getByTestId('profile-button').click();
    await page2.getByRole('link', { name: 'Log in' }).click();
    await page2.getByTestId('username').fill('rajesh.vijay@cognizant.com');
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByTestId('password').fill('Rv55861$rv55861');
    await page2.getByRole('button', { name: 'Log in' }).click();
    await page2.getByRole('link', { name: 'Repositories' }).click();
    await page2.getByRole('link', { name: 'ticketbooking', exact: true }).click();
    
     
/*      await page2.getByRole('button', { name: 'Microsoft' }).click();
      await page2.getByLabel('Enter your email, phone, or').fill('588336@cognizant.com');
      await page2.getByRole('button', { name: 'Next' }).click();
      await page2.locator('#i0118').fill('Saithiyash@221231');
      await page2.getByRole('button', { name: 'Sign in' }).click();
      await page2.waitForTimeout(4000);
        //await page2.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
      //await page2.getByLabel('Don\'t show this again').check();*/
      //await page.getByRole('button', { name: 'Yes' }).click();
    await page2.getByRole('link', { name: 'Testing Bitbucket' }).click();
    await page2.getByTestId('ContextualNavigation').getByRole('link', { name: 'Pull requests' }).click();
    await page.waitForTimeout(4000);
    });
   
   

Then('The User is able to view Docs tool', async()=> {
    console.log('the User is able to view Bitbucket tool with pull requests');
    await page.getByTestId('header-tab-6').click();
    const page2Promise = page.waitForEvent('popup');
    await page.waitForTimeout(4000);
    await page.getByRole('link', { name: 'Edit this page' }).click();
    const page2 = await page2Promise;
    await page2.getByLabel('Username or email address').fill('615007');
    await page2.getByLabel('Username or email address').press('Tab');
    await page2.getByLabel('Password').fill('check@861');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    //await page2.getByRole('button', { name: 'Verify' }).click();
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    //await page2.goto('https://login.microsoftonline.com/de08c407-19b9-427d-9fe8-edf254300ca7/login');
    //await page2.getByRole('button', { name: 'Cancel' }).click();
    //await page2.locator('[data-test-id="\\36 15007\\@cognizant\\.com"]').click();
    //await page2.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
    await page2.getByLabel('Don\'t show this again').check();
    await page2.getByRole('button', { name: 'Yes' }).click();
});