import { test, expect } from '@playwright/test';
import { setTimeout } from 'node:timers/promises';

test('test', async ({ page }) => {


  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email').click();
  await page1.getByLabel('Username or email').fill('catalog-user');
  await page1.getByLabel('Password', { exact: true }).click();
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByLabel('Show password').click();
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('automation');
  await page.getByRole('link', { name: 'TicketBookingAutomation' }).click();
  
  await setTimeout(4000);
  
  await page.getByTestId('header-tab-1').click();
  await setTimeout(4000);
  await page.getByTestId('header-tab-2').click();
  await setTimeout(3000);
  await page.getByTestId('header-tab-3').click();
  await setTimeout(3000);
  await page.getByTestId('header-tab-4').click();
  await setTimeout(3000);
  await page.getByTestId('header-tab-5').click();

//await setTimeout(3000);
//span[text()="TicketBooking"]
  
  await expect(page.getByRole('link', { name: 'TicketBooking' })).toBeVisible();
  //await page.getByRole('link', { name: 'TicketBooking' }).click();
  
  //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation/api');
  
  await setTimeout(3000);
  await page.getByTestId('header-tab-6').click();
  await page.reload();


  //await setTimeout(20000);
  //await expect(page.getByRole('link', { name: 'Ticket Booking' })).toBeVisible();
  //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation/api');
  
  //await page.waitForTimeout(3000);
  //await setTimeout(4000);
  await page.getByTestId('header-tab-7').click();
  await page.locator('div:nth-child(4)').first().click();
  
  await setTimeout(3000);
  await expect(page.getByRole('link', { name: 'SeatAvailability' })).toBeVisible();
  await page.getByRole('link', { name: 'SeatAvailability' }).click();
  await setTimeout(3000);
  await page.locator('div:nth-child(4) > .MuiSvgIcon-root-8200').click();
  await page.getByTestId('header-tab-8').click();
  await setTimeout(3000);
  await expect(page.getByText('Reliability')).toBeVisible();
  await page.getByText('Reliability').click();
  await page.getByText('Security').click();
  await page.getByText('Ops Insights').click();
  await setTimeout(3000);
  await page.getByTestId('header-tab-9').click();
  await setTimeout(3000);
  await expect(page.getByRole('heading', { name: 'DORA Metrics' })).toBeVisible();
  await page.getByTestId('header-tab-10').click();
  await setTimeout(3000);
  await expect(page.getByText('Cloudability Metrics - Monthly')).toBeVisible();
  await setTimeout(3000);

  //wait

  await page.getByTestId('header-tab-6').click();
  await setTimeout(2000);
  await page.locator('//*[@id="root"]/div/main/div/div/div[4]/svg').first().click();
  await setTimeout(20000);

  //await page.waitForSelector('[ID="header-tab-7"]');

  await page.getByTestId('header-tab-7').click();
  await setTimeout(3000);
  
  await page.getByTestId('header-tab-8').click();
  await setTimeout(3000);
  
  await page.getByTestId('header-tab-9').click();
  await setTimeout(3000);
 
  await page.getByTestId('header-tab-10').click();
  await setTimeout(10000); 
  await page.getByTestId('header-tab-0').click(); 
});

  //await page.waitForTimeout(3000);

  //await page.waitForTimeout(2000);
  //await expect(page.getByRole('link', { name: 'View Source , Opens in a new' })).to.exist;
 
  //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
    //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  
  //
  //await page2.close();

  //console.log('New tab closed');
  //console.log('First page title after closing new tab:', await page1.title());


  //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  //(async () => {
    // Launch the browser
    //const browser = await chromium.launch();
    //const context = await browser.newContext();
    //const page = await context.newPage();
  

  
  // Open the first page
  //await page.goto('https://github.com/TheCognizantFoundry/TicketBooking/tree/Automation/');
  //console.log('First page title:', await page.title());

  // Open a new tab
 // const { chromium } = require('playwright');

  //const newPage = await context.newPage();
  
  //await newPage.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  //console.log('New page title:', await newPage.title());

  // Switch back to the previous tab
  //const pages = await browser.pages();
  /*const currentPageIndex = pages.indexOf(newPage);

  if (currentPageIndex > 0) {
    const previousPage = pages[currentPageIndex - 1];
    await previousPage.bringToFront();
    console.log('Previous page title:', await previousPage.title());
  }*/

  // Close the browser
  //await browser.close();




    //await browser.close();
//await browser.close();


/*const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  // Open the first page
  const page = await context.newPage();
  //await page.goto('https://example.com');
  console.log('First page title:', await page.title());

  // Open a new tab within the same context
  const newPage = await context.newPage();
  await newPage.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  console.log('New page title:', await newPage.title());

  // Switch back to the previous tab
  const pages = context.pages();
  const currentPageIndex = pages.indexOf(newPage);

  if (currentPageIndex > 0) {
    const previousPage = pages[currentPageIndex - 1];
    await previousPage.bringToFront();
    console.log('Previous page title:', await previousPage.title());
  }

  // Close the browser
  await browser.close();
})();*/




//Context.waitForEvent()

  //await expect(page.getByRole('link', { name: 'View TechDocs' })).to.exist;
//   await page.getByRole('link', { name: 'View TechDocs' }).click();
//   await page.waitForTimeout(2000);
  
//   await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  
//   //await page.waitForTimeout(3000);
//   //await expect(page.getByRole('article').getByRole('link', { name: 'Guest User' })).to.exist;
//   await page.getByRole('article').getByRole('link', { name: 'Guest User' }).click();
//   await page.waitForTimeout(1000);
//   await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
//   //await expect(page.getByRole('link', { name: 'theaterbooking' })).to.exist;
//   //await page.waitForTimeout(1000);
//   //....await page.getByRole('link', { name: 'theaterbooking' }).click();
//   //await expect(page.getByRole('link', { name: 'TheatreBookingWeb' })).to.exist;
//   //await page.waitForTimeout(1000);
//   //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');

//   await page.waitForTimeout(1000);

//   await page.getByRole('link', { name: 'TheatreBookingWeb' }).click();
//   //await page.waitForTimeout(3000);
//   await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
//   //const page3Promise = page.waitForEvent('popup');
//  // await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
//   //const page3 = await page3Promise;

//   const page3Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Source Code , Opens in a new' }).click();
//   const page3 = await page3Promise;
//   await page.waitForTimeout(3000);
//   await page3.close();

//   const page4Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Deployed Application - Dashboard , Opens in a new window' }).click();
//   const page4 = await page4Promise;
//   await page.waitForTimeout(3000);
//   await page4.close();
//   const page5Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Deployed Application - Shows' }).click();
//   const page5 = await page5Promise;
//   await page.waitForTimeout(3000);
//   await page5.close();
//   const page6Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Deployed Application - Select' }).click();
//   const page6 = await page6Promise;
//   await page.waitForTimeout(3000);
//   await page6.close();

//   await page.getByTestId('header-tab-1').click();
//   await page.getByRole('cell', { name: 'UPSHIFT-3191' }).click();
//   await page.waitForTimeout(3000);
//   await page.getByTestId('header-tab-2').click();
//   await page.waitForTimeout(3000);
//   await page.getByRole('button', { name: 'CLOSED' }).click();
//   await page.waitForTimeout(3000);
//   await page.getByRole('button', { name: 'ALL' }).click();
//   await page.waitForTimeout(3000);
//   await page.getByRole('button', { name: 'OPEN' }).click();
//   await page.waitForTimeout(3000);
//   await page.getByPlaceholder('Search').click();
//   await page.waitForTimeout(3000);
//   await page.getByPlaceholder('Search').fill('new');

