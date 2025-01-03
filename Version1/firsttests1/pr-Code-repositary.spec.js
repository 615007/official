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
  await page.getByTestId('header-tab-2').click();
  
  await page.getByRole('button', { name: 'CLOSED' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ALL' }).click();
  await page.getByRole('button', { name: 'OPEN' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('new',{timeout:6000});
  await page.waitForTimeout(5000);

});