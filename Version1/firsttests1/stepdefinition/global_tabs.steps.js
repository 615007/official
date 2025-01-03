// const { Given, When, Then } = require('@cucumber/cucumber');


// Given('User in the website and click on the LoginSign in using Open ID of the flowsource website', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     console.log('User in the website and click on the LoginSign in using Open ID of the flowsource website');
//     await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component&filters%5Buser%5D=all\\');
//     const page1Promise = page.waitForEvent('popup');
//     await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
//     const page1 = await page1Promise;
// });

// When('User enter the credentials and click the signin', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     const page1 = await page1Promise;
//     console.log('User enter the credentials and click the signin');
//     await page1.getByLabel('Username or email').fill('catalog-user');
//     await page1.getByLabel('Password', { exact: true }).click();
//     await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
//     await page1.getByRole('button', { name: 'Sign In' }).click();

// });

// Then('User signin successful', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     console.log('User signin successful');
//     await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
// });


const { Given, When, Then } = require('@cucumber/cucumber');
//const { expect } = require('@playwright/test')

Given('User in the website and click on the LoginSign in using Open ID of the flowsource website', async function () {
    console.log('User in the website and click on the LoginSign in using Open ID of the flowsource website');
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component&filters%5Buser%5D=all\\');

    this.page1Promise = page.waitForEvent('popup');
    await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
    this.page1 = await this.page1Promise;


});

When('User enter the credentials and click the signin', async function () {
    const page1 = await this.page1Promise;
    console.log('User enter the credentials and click the signin');
    await page1.getByLabel('Username or email').fill('catalog-user');
    await page1.getByLabel('Password', { exact: true }).click();
    await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
    await page1.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(3000);
});

// Then('User signin successful', async function () {
//     console.log('User signin successful');
//     await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
//     await page.getByPlaceholder('Filter').click();
//     await page.getByPlaceholder('Filter').fill('auto');
//     await page.getByRole('cell', { name: 'TicketBookingAutomation' }).click();
// });

Then('User click on filer and user search for auto and click TicketBookingAutomation', async () => {
    console.log('User click on filer and user search for auto and click TicketBookingAutomation');
    await page.getByPlaceholder('Filter').click();
    await page.getByPlaceholder('Filter').fill('auto');
    await page.waitForTimeout(3000);
    await page.getByRole('cell', { name: 'TicketBookingAutomation' }).click();
    await page.waitForTimeout(3000);


});

Then('Verify Overview menu link is displayed', async () => {
    console.log('Verify Overview menu link is displayed');
    await page.waitForTimeout(3000);
    await page.getByTestId('header-tab-0').click();

});



Then('Verify Stories menu link is displayed', async () => {
    console.log('Verify Stories menu link is displayed');
    await page.waitForTimeout(2000);
    await page.getByTestId('header-tab-1').click();
});


Then('Verify Code Repository menu link is displayed', async () => {
    console.log('Verify Code Repository menu link is displayed');
    await page.waitForTimeout(5000);
    await page.getByTestId('header-tab-2').click();

});


Then('Verify CICD link is displayed', async () => {
    console.log('Verify CICD link is displayed');
    await page.waitForTimeout(3000);
    await page.getByTestId('header-tab-3').click();

});


Then('Verify Code Quality menu link is displayed', async () => {
    console.log('Verify Code Quality menu link is displayed');
    await page.waitForTimeout(3000);
    await page.getByTestId('header-tab-4').click();

});


Then('Verify API link is displayed', async () => {
    console.log('Verify API link is displayed');
    await page.waitForTimeout(3000);
    await page.getByTestId('header-tab-5').click();

});


Then('Verify Docs menu link is displayed', async () => {
    console.log('Verify Docs menu link is displayed');
    await page.waitForTimeout(3000);
    await page.getByTestId('header-tab-6').click();

});


Then('Verify Dependencies menu link is displayed', async () => {
    console.log('Verify Dependencies menu link is displayed');
    await page.locator('div:nth-child(4)').click();
    await page.waitForTimeout(3000);
    await page.getByTestId('header-tab-7').click();
    await page.waitForTimeout(5000);

});


Then('Verify Well Architected menu link is displayed', async () => {

    await page.waitForTimeout(3000);
    await page.getByTestId('header-tab-8', { timeout: 60000 }).click();
    console.log('Verify Well Architected menu link is displayed');
    //await page.waitForSelector('header-tab-8', { timeout: 60000 }, { visible: true });
    //await page.getByRole()
    //page.click('header-tab-8');
    // return Promise.resolve('pending');
});

// Then('Verify Well Architected menu link is displayed', async function () {
//     await page.waitForSelector("(//a[@role='tab'])[10]'", { timeout: 60000 });
//     const isVisible = await page.isVisible("(//a[@role='tab'])[10]'");
//     expect(isVisible).toBe(true);
// });

// Then('Verify Well Architected menu link is displayed', async () => {
//     console.log('Verify Well Architected menu link is displayed');
//     // Wait for a short period to ensure the element is loaded
//     await page.waitForTimeout(5000);
//     // Locate the element by its test ID
//     const wellArchitectedLink = await page.getByLocator("//span[normalize-space()='Well Architected']")
//     //getByTestId('header-tab-8');
//     // Check if the element is visible
//     const isVisible = await wellArchitectedLink.isVisible();
//     if (!isVisible) {
//         throw new Error('Well Architected menu link is not displayed');
//     }
//     // Click on the element
//     await wellArchitectedLink.click();
// });


// Then('Verify Dora metrics menu link is displayed', async () => {
//     console.log('Verify Dora metrics menu link is displayed');
//     await page.waitForTimeout(3000);
//     await page.getByTestId('header-tab-9').click();
//     return Promise.resolve('pending');

// });

Then('Verify Dora metrics menu link is displayed', async () => {
    console.log('Verify Dora metrics menu link is displayed');
    await page.waitForTimeout(3000);
    const doraMetricsLink = await page.getByTestId('header-tab-9');
    const isVisible = await doraMetricsLink.isVisible();
    if (!isVisible) {
        throw new Error('Dora metrics menu link is not displayed');
    }
    await doraMetricsLink.click();
});


// Then('Verify Finops Metrics menu link is displayed', async () => {
//     console.log('Verify Finops Metrics menu link is displayed');
//     await page.waitForTimeout(3000);
//     await page.getByTestId('header-tab-10').click();
//     return Promise.resolve('pending');

// });

Then('Verify Finops Metrics menu link is displayed', async () => {
    console.log('Verify Finops Metrics menu link is displayed');
    await page.waitForTimeout(3000);
    const finopsMetricsLink = await page.getByTestId('header-tab-10');
    const isVisible = await finopsMetricsLink.isVisible();
    if (!isVisible) {
        throw new Error('Finops Metrics menu link is not displayed');
    }
    await finopsMetricsLink.click();

    await page.waitForTimeout(6000);
});

    //Scenario:  TC002_Navigate to Overview menu and check About section


    
Then('Verify View Source link is displayed', async ()=> {
    console.log('Verify View Source link is displayed');
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
    await page2.getByLabel('Password').fill('Welcome@615');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(3000);  
    //await page2.getByRole('button', { name: 'Continue' }).click();
    //await page.waitForTimeout(3000);
    await page2.close();
    //await page.waitForTimeout(1000);
    //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
});

Then('Verify Techdocs link is displayed', async ()=> {
    console.log('Verify Techdocs link is displayed');
    await page.waitForTimeout(2000);
    //await expect(page.getByRole('link', { name: 'View TechDocs' })).toBeVisible();
    await page.getByRole('link', { name: 'View TechDocs' }).click();
    await page.waitForTimeout(5000);
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');         

    await page.waitForTimeout(5000);
});


//Then('Verify Description lable is displayed', async ()=> {
  //  console.log('Then Verify Description lable is displayed');
    //await expect(page.getByRole('heading', { name: 'Description' })).isVisible();
    //await page.waitForTimeout(3000);

//});

Then('Verify Owner lable is displayed', async ()=> {
    console.log('Verify Owner lable is displayed');
    //await expect(page.getByRole('article').getByRole('link', { name: 'Guest User' })).isVisible();
    await page.getByRole('article').getByRole('link', { name: 'Guest User' }).click();
    await page.waitForTimeout(3000);
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
   
});   


Then('Verify Schedule refresh link is displayed', async ()=> {
    console.log('Verify Schedule refresh link is displayed');
    await page.getByLabel('Refresh').click();
    await page.waitForTimeout(3000);

});

Then('Verify Edit metadata link is displayed', async ()=> {
    console.log('Verify Schedule refresh link is displayed');
    const page2Promise = page.waitForEvent('popup');
    await page.getByLabel('Edit, Opens in a new window').click();
    const page2 = await page2Promise;
    await page2.goto('https://github.com/TheCognizantFoundry/TicketBooking/edit/Automation/catalog-info.yaml');
    await page.waitForTimeout(3000);
    await page2.close();
});

Then('Verify System lable is displayed', async ()=> {
    console.log('Verify System lable is displayed');
    //await expect(page.getByRole('link', { name: 'theaterbooking' })).isVisible();
    await page.getByRole('link', { name: 'theaterbooking' }).click();
    await page.waitForTimeout(3000);
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');


});


Then('Verify Parent component lable is displayed', async()=>{
    console.log('Verify Parent component lable is displayed');
    //await expect(page.getByRole('heading', { name: 'Parent Component' })).isVisible();
    await page.getByRole('link', { name: 'TheatreBookingWeb' }).click();
    await page.waitForTimeout(3000);
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBooking');

});

//Then('Verify type lable is displayed', async()=>{
  //  console.log('Verify type lable is displayed');
    //await expect(page.getByRole('heading', { name: 'Type' })).isVisible();
    
//});


//Then('Verify Life Cycle  lable is displayed', async()=> {
//    console.log('Verify Life Cycle  lable is displayed');
//    await expect(page.getByRole('heading', { name: 'Lifecycle' })).isVisible();
//});




Then('Verify View Graph lable is displayed', async()=> {
    console.log('Verify View Graph lable is displayed');
    await page.getByRole('link', { name: 'View graph' }).click();
    await page.waitForTimeout(3000);
    await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBooking12072024');
    await page.waitForTimeout(3000);

});

Then('Verify Source Code lable is displayed', async()=> {
    console.log('Verify Source Code lable is displayed');
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Source Code , Opens in a new' }).click();
    const page3 = await page3Promise;
    await page.waitForTimeout(3000);
    await page3.close();
    await page.waitForTimeout(3000);

});

Then('Verify Deployed Application lable is displayed', async()=> {
    console.log('Verify Deployed Application lable is displayed');
    const page4Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Deployed Application - Dashboard , Opens in a new window' }).click();
    const page4 = await page4Promise;
    await page.waitForTimeout(5000);
    await page4.close();
    await page.waitForTimeout(3000);
});

Then('Verify Deployed Shows lable is displayed', async()=> {
    console.log('Verify Deployed Shows lable is displayed');
    const page5Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Deployed Application - Shows' }).click();
    await page.waitForTimeout(5000);
    const page5 = await page5Promise;
    await page5.close();
    await page.waitForTimeout(3000);
});

Then('Verify Deployed Select lable is displayed', async()=> {
    console.log('Verify Deployed Select lable is displayed');
    const page6Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Deployed Application - Select' }).click();
    const page6 = await page6Promise;
    await page.waitForTimeout(5000);
    await page6.close();
    await page.waitForTimeout(5000);

  
});

Then('Verify Upshift link1 is displayed', async()=> {
    console.log('Verify Upshift link1 is displayed');
    await page.getByTestId('header-tab-1').click();
    await page.waitForTimeout(7000);
    C
    await page.getByRole('link', { name: 'UPSHIFT-3191' }).click();
    const page2 = await page2Promise;
    await page.waitForTimeout(3000);
    await page2.getByTestId('username').click();
    await page2.getByTestId('username').fill('rajesh.vijay@cognizant.com');
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByTestId('password').click({
    modifiers: ['ControlOrMeta']
  });
    await page2.getByTestId('password').fill('Rv55861$rv55861$');
    await page2.getByRole('button', { name: 'Show password' }).click();
    await page2.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(7000);
    //await page2.goto('https://id.atlassian.com/login/authorize?continue=https%3A%2F%2Fcdeproducts.atlassian.net%2Fbrowse%2FUPSHIFT-3191&token=eyJraWQiOiJtaWNyb3MvaWQtYXV0aGVudGljYXRpb24vcXUxNmgwMGYwbGxpNHM4cSIsImFsZyI6IlJTMjU2In0.eyJtYXJrZWRWZXJpZmllZCI6ImZhbHNlIiwibG9naW5UeXBlIjoic2Vzc2lvblJlZnJlc2giLCJjb250YWluZXJUeXBlIjoiZ2xvYmFsIiwiaXNzIjoibWljcm9zL2lkLWF1dGhlbnRpY2F0aW9uIiwidXNlcklkIjoiNWU1NjQyZTliYmI1MTEwYzlhNjg1YjdmIiwidHJhbnNhY3Rpb25JZCI6InVzLWVhc3QtMXw1NDQ5ZGI5My00MTFjLTRjNGItYjI0Mi01YTE2OWQ4NzRkZjYiLCJpc1NsYWNrQXBwU291cmNlIjoiZmFsc2UiLCJhdWQiOiJsaW5rLXNpZ25hdHVyZS12YWxpZGF0b3IiLCJuYmYiOjE3MjI4NTU3NDAsInNjb3BlIjoiTG9naW4iLCJ2ZXJpZmljYXRpb25UeXBlIjoidmVyaWZ5IiwiZXhwIjoxNzIyODU1ODYwLCJpYXQiOjE3MjI4NTU3NDAsImp0aSI6ImIwZjY0YTFiLTY1MjYtNDZmYi1hMDZmLWI2NjVmYmI1ODk4NiIsImhhc2hlZENzcmZUb2tlbiI6IjIzOWM4MDIzNjU3YjRjMDViYTk1OGNlYjhmNDBmYjM2MWE4OWUyNzc5YTNhMTNhOTRmZjkzYjA3ZDVhNTU5MDcifQ.J3O9H-OjaKFOwsTZ51_pcWEAo2q5q3e_Or_kWQ3mYyvP3s6uACPEIaPJ_HSDTmW91hRuFSbiSN2plNYn8ErEXYJY_fKHhvYW03CKS_R-VolUBZf053wRD71Dfch19UZeO0Vrk406uFuxAnqbyMwQB_RtRh2nyIpJJ75hcRu1a5-Yv4WeqGZbB8LIv0e7kKBxEVi9dOpxyDbRa-yz3B6kztgiHXAsguZl0ivZsRk_kdG_C0MgLpNM1RXTmDBvnAMFTzmxAYFVtvmqp1F9F8k6Neu8FRwEKxUj8RtSt1FoRJi5BdWLKPZNlXmuG0z6gTn5LEK-jaq7UHdXsfdcZBVLWQ&state=eyJoYXNoZWRDc3JmVG9rZW4iOiIwM2IyNTQ3MDc5YjY2NzAxNzk5ZjQ3Mzg2YjQ5YTA2YWI3NWU4M2VjZDEwZTFjZWJiZGQwYmU1MmFkYjQyOTE0In0%3D');
    await page2.goto('https://cdeproducts.atlassian.net/browse/UPSHIFT-3191');
    await page.waitForTimeout(3000);
    await page2.close();


});

Then('Verify Upshift link2 is displayed', async()=> {
    console.log('Verify Upshift link2 is displayed');
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'UPSHIFT-3190' }).click();
    const page3 = await page3Promise;
    await page.waitForTimeout(3000);
    await page3.close();


});

    
Then('Verify Upshift link3 is displayed', async()=> {
    console.log('Verify Upshift link3 is displayed');

    const page4Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'UPSHIFT-3189' }).click();
    const page4 = await page4Promise;
    await page.waitForTimeout(3000);
    await page4.close();
   

});

Then('Verify Upshift link4 is displayed', async()=> {
    console.log('Verify Upshift link4 is displayed');

    const page5Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'UPSHIFT-3188' }).click();
    const page5 = await page5Promise;
  //await page5.goto('https://cdeproducts.atlassian.net/browse/UPSHIFT-3188');
    await page.waitForTimeout(3000);
  //await setTimeout(5000);
    await page5.close();

});
  
Then('Verify Upshift link5 is displayed', async()=> {
    console.log('Verify Upshift link5 is displayed');

  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'UPSHIFT-3187' }).click();
  const page6 = await page6Promise;
  await page.waitForTimeout(4000);
  //await setTimeout(5000);
  await page6.close();

});

Then('Verify Upshift link6 is displayed', async()=> {
    console.log('Verify Upshift link6 is displayed');
    const page7Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'UPSHIFT-3175' }).click();
    const page7 = await page7Promise;
    await page.waitForTimeout(7000);
  //await setTimeout(5000);
    await page7.close();

});
  
Then('Verify Upshift link7 is displayed', async()=> {
    console.log('Verify Upshift link7 is displayed');
    const page8Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'UPSHIFT-3174' }).click();
    const page8 = await page8Promise;
    await page.waitForTimeout(3000);
    await page8.close();
 
  });

Then('Verify Code-repo 1link is displayed', async()=> {
    console.log('Verify Code-repo 1link is displayed');
    await page.getByTestId('header-tab-2').click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Backstage checkmarx' }).click();
    const page2 = await page2Promise;
    await page.waitForTimeout(3000);
    await page2.close();
    await page.waitForTimeout(3000);

  });


  Then('Verify Selecting link is displayed', async()=> {
    console.log('Verify Selecting link is displayed');
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Testing catalogtest' }).click();
    const page3 = await page3Promise;
    await page.waitForTimeout(3000);
    await page3.close();
    await page.waitForTimeout(3000);

}); 
  

Then('Verify Open link is displayed', async()=> {
    console.log('Verify Open link is displayed');
    await page.getByRole('button', { name: 'OPEN' }).click();
    await page.waitForTimeout(3000);
    
});

Then('Verify Closed link is displayed', async()=> {
    console.log('Verify Closed link is displayed');  
    await page.getByRole('button', { name: 'CLOSED' }).click();
    await page.waitForTimeout(3000);

});

Then('Verify ALL link is displayed', async()=> {
    console.log('Verify ALL link is displayed');  
    await page.getByRole('button', { name: 'ALL' }).click();
    await page.waitForTimeout(3000);


});

Then('Verify Search link is displayed', async()=> {
    console.log('Verify Search link is displayed');  
    await page.getByPlaceholder('Search').click();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Search').fill('test');
    await page.waitForTimeout(3000);

});


Then('Verify navigate link is displayed', async()=> {
    console.log('Verify navigate link is displayed');
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: '2', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: '3' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: '1' }).click();

    });



Then('Verify Clear link is displayed', async()=> {
    console.log('Verify Clear link is displayed');
    await page.getByRole('article').getByRole('img').nth(3).click();
    await page.waitForTimeout(3000);


});


Then('Verify CQ-Header  link is displayed', async()=> {
    console.log('Verify CQ-Header  link is displayed');
    await page.getByTestId('header-tab-4').click();
    await expect(page.getByTestId('header-tab-4')).to.exist;
    await expect(page.getByRole('heading', { name: 'Code Quality' })).to.exist;
    await expect(page.getByText('Last Scan Date 21-6-')).to.exist;
    await expect(page.getByText('QUALITY GATE STATUS')).to.exist;
    await expect(page.getByText('Passed', { exact: true })).to.exist;

});

Then('Verify CQ-Sub menu link is displayed', async()=> {
    console.log('Verify CQ-Sub menu link is displayed');
    await expect(page.getByText('Bugs', { exact: true })).to.exist;
    await expect(page.locator('div').filter({ hasText: /^Coverage$/ })).to.exist;
    await expect(page.getByText('Vulnerabilities', { exact: true })).to.exist;
    await expect(page.getByText('Code Smells', { exact: true })).to.exist;
    await expect(page.getByText('Duplications')).to.exist;
    await expect(page.getByText('Hotspots Reviewed')).to.exist;

});


Then('Verify CQ-Firstchart link is displayed', async()=> {
    console.log('Verify CQ-Header  link is displayed');
    await expect(page.getByText('Quality Gate Trend')).to.exist;

});

Then('Verify CQ-Secoundchart link is displayed', async()=> {
    console.log('Verify CQ-Header  link is displayed');
    await expect(page.getByText('Bugs - Code Smells -')).to.exist;

});

Then('Verify Docs-Edit  link is displayed', async()=> {
    console.log('Verify Docs-Edit  link is displayed');

    await page.getByTestId('header-tab-6').click();
    await page.getByRole('link', { name: 'Ticket Booking' }).click();
    await page.getByRole('heading', { name: 'Ticket Booking' }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Edit this page' }).click();
    const page2 = await page2Promise;
    await page2.getByLabel('Username or email address').fill('615007');
    await page2.getByLabel('Password').click();
    await page2.getByLabel('Password').fill('Welcome@615');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(8000);

});

Then('Verify Continue  link is displayed', async()=> {
    console.log('Verify Continue  link is displayed');

    await page2.getByRole('button', { name: 'Continue' }).click()
    await page.waitForTimeout(3000);
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(8000);
    await page2.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(9000);

});


Then('Verify CICD sub-link is displayed', async()=> {
    console.log('Verify CICD sub-link is displayed');
    await page.getByTestId('header-tab-3').click();
    await page.getByRole('button', { name: 'Basic workflow demo' }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Update catalog-info.yaml' }).first().click();
    const page2 = await page2Promise;
    await page2.getByLabel('Username or email address').fill('615007');
    await page2.getByLabel('Password').click();
    //await page.waitForTimeout(2000);
    await page2.getByLabel('Password').fill('Rv55861rv55861');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(2000);
    //await page2.close();
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
    await page2.getByRole('button', { name: 'Sign in' }).click();
    await page2.getByRole('button', { name: 'Yes' }).click();
    
    await page.getByRole('button', { name: 'Basic workflow demo' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'TicketBooking-Pipeline' }).click();
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Update pipeline.yml' }).first().click();
    const page3 = await page3Promise;
    await page.waitForTimeout(3000);

});


