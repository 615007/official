import { test, expect } from '@playwright/test';
import { setTimeout } from 'node:timers/promises';


test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
  const page1 = await page1Promise;


  //Login url
  
  await page1.getByLabel('Username or email').click();
  await page1.getByLabel('Username or email').fill('catalog-user');
  await page1.getByLabel('Password', { exact: true }).click();
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByLabel('Show password').click();
  await page1.getByRole('button', { name: 'Sign In' }).click();

  //Selecting Component 

  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog');
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('TicketBookingtest123');
  await page.getByRole('link', { name: 'TicketBookingtest123', exact: true }).click();
  await setTimeout(4000);

  //first link

  await expect(page.getByRole('link', { name: 'View Source , Opens in a new' })).toBeVisible();
  const page2Promise = page.waitForEvent('popup');

  await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
  const page2 = await page2Promise;
  // await page2.getByLabel('Username or email address').click();
  // await page2.getByLabel('Username or email address').fill('615007');
  // await page2.getByLabel('Password').click();
  // await page2.getByLabel('Password').fill('Welcome@615');
  // //await page2.getByRole('button', { name: 'Sign in' }).click();
  //await setTimeout(10000);
  //await page2.getByRole('button', { name: 'Continue' }).click();
  await setTimeout(3000);
  await page2.close();
  //await setTimeout(6000);



//second link

  await expect(page.getByRole('link', { name: 'View TechDocs' })).toBeVisible();
  await page.getByRole('link', { name: 'View TechDocs' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  
  await setTimeout(3000);
  await expect(page.getByRole('article').getByRole('link', { name: 'Guest User' })).toBeVisible();
  await page.getByRole('article').getByRole('link', { name: 'Guest User' }).click();
  await setTimeout(2000);

  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  
  await setTimeout(2000);
  await page.close();
  

  //This method pauses the script execution until the specified element appears in the DOM
  
 
  
  //await page.waitForSelector('theaterbooking');
  //await expect(page.getByRole('link', { name: 'theaterbooking'})).toBeVisible();
  //await page.getByRole('link', { name: 'theaterbooking'}).click();
  //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  
  //await expect(page.getByRole('link', { name: 'TheatreBookingWeb' })).toBeVisible();
  //await page.getByRole('link', { name: 'TheatreBookingWeb' }).click();
  //await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
 
  //await page.reload();


  
//   await expect(page.getByRole('link', { name: 'Source Code , Opens in a new' })).toBeVisible();
//   const page3Promise = page.waitForEvent('popup');

//   await page.getByRole('link', { name: 'Source Code , Opens in a new' }).click();

//   const page3 = await page3Promise;
//   await setTimeout(4000);
//   await page3.close();
//   await setTimeout(4000);
  
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






// await expect(page.getByTestId('header-tab-8')).toBeVisible();
// await page.getByTestId('header-tab-8').click();
// await expect(page.getByTestId('header-tab-9')).toBeVisible();
// await page.getByTestId('header-tab-9').click();
// await expect(page.getByTestId('header-tab-10')).toBeVisible();
// await page.getByTestId('header-tab-10').click();





// await page.locator('div').filter({ hasText: /^Has subcomponents$/ }).first().click();
// await expect(page.getByRole('heading', { name: 'Has subcomponents' })).toBeVisible();
// await page.locator('div:nth-child(4) > .MuiSvgIcon-root-8459').click();
// await setTimeout(4000);



});