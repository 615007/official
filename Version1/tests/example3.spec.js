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
  await page.getByPlaceholder('Filter').fill('jira');
  await page.getByRole('link', { name: 'Jira' }).click();
  await page.getByTestId('header-tab-1').click();

  await setTimeout(4000);
  await page.getByRole('link', { name: '2', exact: true }).click();
  await setTimeout(6000);
  await page.getByRole('link', { name: '3', exact: true }).click();
  await setTimeout(6000);
  await page.getByRole('link', { name: '4', exact: true }).click();
  await setTimeout(6000);
  await page.getByRole('link', { name: '5' }).click();
  await setTimeout(6000);
  await page.locator('li').filter({ hasText: '»' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/Jira/stories#');
});