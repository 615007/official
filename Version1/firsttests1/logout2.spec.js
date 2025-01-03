import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'GitHubSign in using' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email address').click();
  await page1.getByLabel('Username or email address').fill('615007');
  await page1.getByLabel('Username or email address').press('Tab');
  await page1.getByLabel('Password').fill('Welcome@615');
  await page1.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page1.getByPlaceholder('XXXXXX').fill('239972');
  await page1.getByRole('link', { name: 'Continue' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.locator('.jss4-444').click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByLabel('Settings').click();
  await page.getByTestId('user-settings-menu').click();
  await page.getByTestId('sign-out').click();
});