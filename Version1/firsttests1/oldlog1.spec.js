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
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog');
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('ticketbooking');
  await page.getByRole('link', { name: 'TicketBooking', exact: true }).click();
  await page.getByRole('link', { name: 'TheatreBookingWeb' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/TicketBooking');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
  const page2 = await page2Promise;
  await page2.getByLabel('Username or email address').click();
  await page2.getByLabel('Username or email address').fill('615007');
  await page2.getByLabel('Password').click();
  await page2.getByLabel('Password').fill('Welcome@61500');
  await page2.getByRole('button', { name: 'Sign in' }).click();
  await page2.getByPlaceholder('XXXXXX').click();
  await page2.getByPlaceholder('XXXXXX').fill('844001');
  await page2.getByRole('button', { name: 'Continue' }).click();
  await page2.getByPlaceholder('Email, phone, or Skype').click();
  await page2.getByPlaceholder('Email, phone, or Skype').click();
  await page2.getByPlaceholder('Email, phone, or Skype').fill('615007@cognizant.com');
  await page2.getByRole('button', { name: 'Next' }).click();
  await page2.getByPlaceholder('Password').click();
  await page2.getByPlaceholder('Password').click({
    modifiers: ['ControlOrMeta']
  });
  await page2.getByPlaceholder('Password').fill('Rv55861rv55861$');
  await page2.getByRole('button', { name: 'Sign in' }).click();
  await page2.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
  await page2.getByRole('button', { name: 'Yes' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View Source , Opens in a new' }).click();
  const page3 = await page3Promise;



  await page.getByTestId('header-tab-5').click();
  
  await expect(page.getByRole('link', { name: 'TicketBooking' })).toBeVisible();
  await page.getByRole('link', { name: 'TicketBooking' }).click();
  await page.getByTestId('header-tab-6').click();
  await expect(page.getByRole('link', { name: 'Ticket Booking' })).toBeVisible();
  await page.locator('div:nth-child(4)').first().click();
  await page.getByTestId('header-tab-7').click();
  await expect(page.getByRole('link', { name: 'SeatAvailability' })).toBeVisible();
  await page.getByRole('link', { name: 'SeatAvailability' }).click();
  await page.locator('div:nth-child(4) > .MuiSvgIcon-root-8200').click();
  await page.getByTestId('header-tab-8').click();
  await expect(page.getByText('Reliability')).toBeVisible();
  await page.getByText('Reliability').click();
  await page.getByText('Security').click();
  await page.getByText('Ops Insights').click();
  await page.getByTestId('header-tab-9').click();
  await expect(page.getByRole('heading', { name: 'DORA Metrics' })).toBeVisible();
  await page.getByTestId('header-tab-10').click();
  await expect(page.getByText('Cloudability Metrics - Monthly')).toBeVisible();

});