import { test, expect } from '@playwright/test';
import { setTimeout } from 'node:timers/promises';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email').click();
  await page1.getByLabel('Username or email').fill('Catalog-user');
  await page1.getByLabel('Password', { exact: true }).click();
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByLabel('Show password').click();
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('ticketbooking12');
  await page.getByRole('link', { name: 'TicketBooking12072024' }).click();

  await page.getByRole('link', { name: 'View graph' }).click();
  await page.waitForTimeout(3000);
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBooking12072024');
  await page.waitForTimeout(3000);

  await expect(page.getByRole('button', { name: 'Name' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Source Code , Opens in a new' })).toBeVisible();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Source Code , Opens in a new' }).click();
  const page3 = await page3Promise;
  await page.waitForTimeout(3000);
  await page3.close();
  await page.waitForTimeout(3000);

  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Deployed Application - Dashboard , Opens in a new window' }).click();
  const page4 = await page4Promise;
  await setTimeout(2000);
  await page4.close();

  await page.waitForTimeout(3000);
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Deployed Application - Shows' }).click();
  await setTimeout(2000);
  const page5 = await page5Promise;
  await page5.close();
  
  //await expect(page.getByRole('link', { name: 'Deployed Application - Select' })).toBeVisible();
  const page6Promise = page.waitForEvent('popup');
  //await page.locator('div').filter({ hasText: /^Deployed Application - Select Seats, Opens in a new window$/ }).nth(2).click();
  await page.getByRole('link', { name: 'Deployed Application - Select' }).click();
  const page6 = await page6Promise;
  await setTimeout(3000);
  await page5.close();
  await setTimeout(3000);
});
