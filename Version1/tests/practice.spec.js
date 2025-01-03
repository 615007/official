import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email').click();
  await page1.getByLabel('Username or email').fill('catalog-user');
  await page1.locator('#kc-form-login div').filter({ hasText: 'Password' }).click();
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByLabel('Show password').click();
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('auto');
  await page.getByRole('link', { name: 'TicketBookingAutomation' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
  const page2 = await page2Promise;
  await page2.getByLabel('Username or email address').click();
  await page2.getByLabel('Username or email address').fill('615007');
  await page2.getByLabel('Password').click();
  await page2.getByLabel('Password').fill('Welcome@61500');
  await page2.getByRole('button', { name: 'Sign in' }).click();
  await page2.getByRole('button', { name: 'Continue' }).click();
});