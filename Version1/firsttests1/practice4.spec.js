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
  await page1.getByLabel('Show password').click();
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('auto');
  await page.getByRole('link', { name: 'TicketBookingAutomation' }).click();
  
  await expect(page.getByTestId('header-tab-1')).toBeVisible();
        await expect(page.getByTestId('header-tab-2')).toBeVisible();
        await expect(page.getByTestId('header-tab-3')).toBeVisible();
        await expect(page.getByTestId('header-tab-4')).toBeVisible();
        await expect(page.getByTestId('header-tab-5')).toBeVisible();    
        await expect(page.getByTestId('header-tab-6')).toBeVisible();
        await expect(page.getByTestId('header-tab-7')).toBeVisible();
        await expect(page.getByTestId('header-tab-8')).toBeVisible();
        await expect(page.getByTestId('header-tab-9')).toBeVisible();
        await expect(page.getByTestId('header-tab-10')).toBeVisible();  
        await expect(page.getByText('About')).toBeVisible();
        await expect(page.getByText('DescriptionMicroservice for')).toBeVisible();
        await expect(page.getByText('Relations', { exact: true })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Owner' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'System' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Parent Component' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Type' })).toBeVisible();
        await expect(page.getByRole('article').getByText('Lifecycleproduction')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Tags' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Lifecycle' })).toBeVisible();


      });