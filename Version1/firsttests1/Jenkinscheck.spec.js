import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();
  const page1 = await page1Promise;
  await page1.getByLabel('Username or email').fill('catalog-user');
  await page1.getByLabel('Password', { exact: true }).click();
  await page1.getByLabel('Password', { exact: true }).fill('flowsource1');
  await page1.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog?filters%5Bkind%5D=component');
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('TicketBooking12072024');
  await page.getByRole('link', { name: 'TicketBooking12072024' }).click();
  await page.getByTestId('header-tab-3').click();
  await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> backstage-awsfis2' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '#' }).click();
  const page2 = await page2Promise;
  await page2.getByPlaceholder('Username').fill('backstage-service');
  await page2.getByPlaceholder('Password').click({
    modifiers: ['ControlOrMeta']
  });
  await page2.getByPlaceholder('Password').fill('LaDsU4JqBd');
  await page2.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> backstage-awsfis2' }).click();
  await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> jenkins-backstage-test' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '#4' }).click();
  const page3 = await page3Promise;
  await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> jenkins-backstage-test' }).click();
  await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> jenkins-demo' }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '#3' }).click();
  const page4 = await page4Promise;
  await page4.goto('https://jenkins.cloudsprint.io/job/TicketBookingPipeline(MultiBranch)/job/jenkins-demo/3/changes');
  await page.getByRole('button', { name: 'TicketBookingPipeline(MultiBranch) >> jenkins-demo' }).click();
  await page.getByRole('button', { name: 'TicketBooking(Freestyle' }).click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '#8' }).click();
  const page5 = await page5Promise;
  await page5.goto('https://jenkins.cloudsprint.io/user/backstage-service/');
  await page5.goto('https://jenkins.cloudsprint.io/user/backstage-service/builds');
  await page5.goto('https://jenkins.cloudsprint.io/user/backstage-service/configure');
  await page5.goto('https://jenkins.cloudsprint.io/user/backstage-service/my-views/view/all/');
  await page5.goto('https://jenkins.cloudsprint.io/user/backstage-service/my-views/view/all/builds');
});