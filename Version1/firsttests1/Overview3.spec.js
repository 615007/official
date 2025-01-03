import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email').click();
  await page1.getByLabel('Username or email').fill('catalog-user');
  await page1.getByLabel('Password', { exact: true }).click();
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('auto');
  await page.getByRole('link', { name: 'TicketBookingAutomation' }).click();

  //first link

  await expect(page.getByRole('link', { name: 'View Source , Opens in a new' })).toBeVisible();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
  await page.waitForTimeout(3000);
  const page2 = await page2Promise;
  await page2.close();
 
//second link
await page.waitForTimeout(3000);
await expect(page.getByRole('link', { name: 'View TechDocs' })).toBeVisible();
await page.getByRole('link', { name: 'View TechDocs' }).click();
await page.waitForTimeout(3000);

  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  

  await expect(page.getByRole('article').getByRole('link', { name: 'Guest User' })).toBeVisible();
  await page.getByRole('article').getByRole('link', { name: 'Guest User' }).click();
  await page.waitForTimeout(3000);

  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation');
  
  //This method pauses the script execution until the specified element appears in the DOM
  
 
  
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Source Code , Opens in a new' }).click();
  const page3 = await page2Promise;
  await page.waitForTimeout(3000);
  await page3.close();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Deployed Application - Dashboard , Opens in a new window' }).click();
  const page4 = await page4Promise;
  await page.waitForTimeout(3000);
  await page3.close();
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Deployed Application - Shows' }).click();
  const page5 = await page5Promise;
  await page.waitForTimeout(3000);
  await page5.close();
  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Deployed Application - Select' }).click();
  const page6 = await page6Promise;
  await page.waitForTimeout(3000);
  await page6.close();
  await page.getByTestId('header-tab-1').click();
  await page.getByRole('cell', { name: 'UPSHIFT-3191' }).click();
  await page.waitForTimeout(1000);

});