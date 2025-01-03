import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email').fill('catalog-user');
  await page1.getByLabel('Username or email').press('Tab');
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByLabel('Show password').click();
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('Jira');
  await page.getByRole('link', { name: 'Jira' }).click();
  await page.getByTestId('header-tab-6').click();
  await expect(page.getByTestId('header-tab-6')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Ticket Booking' })).toBeVisible();
  await expect(page.locator('[id="\\31 -introduction"]')).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Table of contents' }).locator('label')).toBeVisible();
  
  
  await expect(page.getByLabel('Navigation').getByText('TicketBooking')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Ticket Booking' })).toBeVisible();
  await page.getByRole('link', { name: 'Ticket Booking' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBookingAutomation/docs');
  await page.getByRole('link', { name: 'Purpose' }).nth(3).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Edit this page' }).click();
  const page2 = await page2Promise;
  await expect(page.getByRole('link', { name: 'Key Features' })).toBeVisible();
  await page.getByRole('link', { name: 'Key Features' }).click();
  await page.locator('a').filter({ hasText: 'Home' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByRole('link', { name: 'Jira' }).click();


  await page.getByTestId('header-tab-6').click();
  await page.getByRole('link', { name: 'System Architecture' }).click();
  await page.getByRole('link', { name: 'Testing' }).click();
  await page.getByRole('link', { name: 'Purpose' }).first().click();


  await page.getByRole('link', { name: 'Flowsource', exact: true }).click();
  await page.getByRole('link', { name: 'Ticket Booking', exact: true }).click();
  
  await expect(page.getByRole('button').nth(3)).toBeVisible();
  await page.getByRole('button').nth(3).click();
  await page.locator('div').filter({ hasText: /^Virtual Agent$/ }).getByRole('button').click();

});