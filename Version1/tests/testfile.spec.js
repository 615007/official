import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'KeycloakSign in using' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email').fill('catalog-admin');
  await page1.getByLabel('Username or email').press('Tab');
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog');
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('air');
  await page.getByRole('link', { name: 'Airhob' }).click();
});