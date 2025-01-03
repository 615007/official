import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email').fill('catalog-user');
  await page1.getByLabel('Username or email').press('Tab');
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByRole('link', { name: 'BitbucketTicketBooking', exact: true }).click();
  await page.getByTestId('header-tab-3').click();
  await page.getByRole('button', { name: 'deployment-to-prod' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '#47' }).click();

  const page2 = await page2Promise;
  await page2.close();

  await page.getByRole('button', { name: 'deployment-to-prod' }).click();
  await page.getByRole('button', { name: 'sonar' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '#46' }).click();

  const page3 = await page3Promise;
  await page3.close();

  await page.getByRole('button', { name: 'sonar' }).click();
  await page.getByRole('button', { name: 'staging' }).click();
  await page.getByRole('heading', { name: '#50' }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '#50' }).click();
  const page4 = await page4Promise;
  await page4.close();

  await page.getByRole('button', { name: 'staging' }).click();
  await page.getByRole('button', { name: 'default' }).click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '#1', exact: true }).click();
  const page5 = await page5Promise;
  
  await page5.getByTestId('profile-button').click();
  await page5.getByRole('link', { name: 'Log in' }).click();
  await page5.getByTestId('username').fill('rajesh.vijay@cognizant.com');
  await page5.getByRole('button', { name: 'Continue' }).click();
  await page5.getByTestId('password').fill('Rv55861$rv55861');
  await page5.getByRole('button', { name: 'Log in' }).click();
  await page5.getByRole('link', { name: 'Repositories' }).click();
  await page5.getByRole('link', { name: 'ticketbooking', exact: true }).click();
  await page5.getByRole('link', { name: 'Commits' }).click();
  await page5.getByRole('link', { name: 'Branches' }).click();
  await page5.getByTestId('ContextualNavigation').getByRole('link', { name: 'Pull requests' }).click();
  await page5.getByTestId('ContextualNavigation').getByRole('link', { name: 'Pipelines' }).click();
  await page5.getByLabel('open').nth(1).click();
  await page5.getByText('tiketbooking-app').click();
  await page5.getByRole('button', { name: 'clear' }).click();
  await page5.getByLabel('open').nth(1).click();
  await page5.locator('#react-select-11-option-0-0').getByText('main').click();
  await page5.getByLabel('open').nth(1).click();
  await page5.getByText('ticketbooking-app').click();
  await page5.getByLabel('open').nth(1).click();
  await page5.getByLabel('open').nth(1).click();
  await page5.locator('div').filter({ hasText: /^Test1$/ }).nth(1).click();
  await page5.locator('.css-1tbvomj').first().click();
  await page5.getByText('Testing-Bitbucket').click();
  await page5.getByLabel('Global navigation').getByRole('link', { name: 'Pull requests' }).click();
  await page5.getByRole('link', { name: 'Repositories' }).click();
  await page5.getByRole('link', { name: 'ticketbooking', exact: true }).click();
  await page5.getByTestId('ContextualNavigation').getByRole('link', { name: 'Pipelines' }).click();
  await page5.getByRole('button', { name: 'Schedules' }).click();
  await page5.getByText('FlowsourcePlatform AvatarFlowsourcePlatformTicketbookingTicketbooking').click();
});