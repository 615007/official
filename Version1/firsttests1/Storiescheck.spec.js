import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email').fill('catalog-user');
  await page1.getByLabel('Password', { exact: true }).click();
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByLabel('Show password').click();
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('auto');
  await page.getByRole('link', { name: 'TicketBookingAutomation' }).click();
  await page.getByTestId('header-tab-1').click();
  await expect(page.getByTestId('header-tab-1')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Jira project name: UPSHIFT' })).toBeVisible();
  await expect(page.getByText('Issues by Status')).toBeVisible();
  await expect(page.locator('canvas').first()).toBeVisible();
  await expect(page.getByText('Open Requests by Priority')).toBeVisible();
  await expect(page.locator('canvas').nth(1)).toBeVisible();
  await expect(page.getByText('Task')).toBeVisible();
  await expect(page.locator('p').filter({ hasText: 'Story' })).toBeVisible();
  await expect(page.getByText('Bug')).toBeVisible();
  await expect(page.getByText('Epic')).toBeVisible();
  await expect(page.getByText('Feature')).toBeVisible();
  await expect(page.getByText('Chore')).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Id' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Story' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Status' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Points' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Priority' })).toBeVisible();
});