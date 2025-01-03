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
  await page.getByPlaceholder('Filter').click();
  await page.getByPlaceholder('Filter').fill('automation');
  await page.getByRole('link', { name: 'TicketBookingAutomation' }).click();
  
  await page.getByTestId('header-tab-1').click();
  await page.waitForTimeout(7000);
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'UPSHIFT-3191' }).click();
  const page2 = await page2Promise;
  await page.waitForTimeout(3000);
  //await page2.getByTestId('username').click();
  //await page2.getByTestId('username').fill('rajesh.vijay@cognizant.com');
  //await page2.getByRole('button', { name: 'Continue' }).click();
  //await page2.getByTestId('password').click({
    //modifiers: ['ControlOrMeta']
  //});
  //await page2.getByTestId('password').fill('Rv55861$rv55861$');
  //await page2.getByRole('button', { name: 'Show password' }).click();
  //await page2.getByRole('button', { name: 'Log in' }).click();
  //await setTimeout(7000);
  //await page.waitForTimeout(15000);
  //await page2.goto('https://id.atlassian.com/login/authorize?continue=https%3A%2F%2Fcdeproducts.atlassian.net%2Fbrowse%2FUPSHIFT-3191&token=eyJraWQiOiJtaWNyb3MvaWQtYXV0aGVudGljYXRpb24vcXUxNmgwMGYwbGxpNHM4cSIsImFsZyI6IlJTMjU2In0.eyJtYXJrZWRWZXJpZmllZCI6ImZhbHNlIiwibG9naW5UeXBlIjoic2Vzc2lvblJlZnJlc2giLCJjb250YWluZXJUeXBlIjoiZ2xvYmFsIiwiaXNzIjoibWljcm9zL2lkLWF1dGhlbnRpY2F0aW9uIiwidXNlcklkIjoiNWU1NjQyZTliYmI1MTEwYzlhNjg1YjdmIiwidHJhbnNhY3Rpb25JZCI6InVzLWVhc3QtMXw1NDQ5ZGI5My00MTFjLTRjNGItYjI0Mi01YTE2OWQ4NzRkZjYiLCJpc1NsYWNrQXBwU291cmNlIjoiZmFsc2UiLCJhdWQiOiJsaW5rLXNpZ25hdHVyZS12YWxpZGF0b3IiLCJuYmYiOjE3MjI4NTU3NDAsInNjb3BlIjoiTG9naW4iLCJ2ZXJpZmljYXRpb25UeXBlIjoidmVyaWZ5IiwiZXhwIjoxNzIyODU1ODYwLCJpYXQiOjE3MjI4NTU3NDAsImp0aSI6ImIwZjY0YTFiLTY1MjYtNDZmYi1hMDZmLWI2NjVmYmI1ODk4NiIsImhhc2hlZENzcmZUb2tlbiI6IjIzOWM4MDIzNjU3YjRjMDViYTk1OGNlYjhmNDBmYjM2MWE4OWUyNzc5YTNhMTNhOTRmZjkzYjA3ZDVhNTU5MDcifQ.J3O9H-OjaKFOwsTZ51_pcWEAo2q5q3e_Or_kWQ3mYyvP3s6uACPEIaPJ_HSDTmW91hRuFSbiSN2plNYn8ErEXYJY_fKHhvYW03CKS_R-VolUBZf053wRD71Dfch19UZeO0Vrk406uFuxAnqbyMwQB_RtRh2nyIpJJ75hcRu1a5-Yv4WeqGZbB8LIv0e7kKBxEVi9dOpxyDbRa-yz3B6kztgiHXAsguZl0ivZsRk_kdG_C0MgLpNM1RXTmDBvnAMFTzmxAYFVtvmqp1F9F8k6Neu8FRwEKxUj8RtSt1FoRJi5BdWLKPZNlXmuG0z6gTn5LEK-jaq7UHdXsfdcZBVLWQ&state=eyJoYXNoZWRDc3JmVG9rZW4iOiIwM2IyNTQ3MDc5YjY2NzAxNzk5ZjQ3Mzg2YjQ5YTA2YWI3NWU4M2VjZDEwZTFjZWJiZGQwYmU1MmFkYjQyOTE0In0%3D');
 // await page2.goto('https://cdeproducts.atlassian.net/browse/UPSHIFT-3191');
  
  //const page3Promise = page.waitForEvent('popup');
 // const page3 = await page3Promise;
  //await page.waitForTimeout(3000);
  //await setTimeout(5000);
  await page2.close();

  const page3Promise = page.waitForEvent('popup');
  
  await page.getByRole('link', { name: 'UPSHIFT-3190' }).click();
  const page3 = await page3Promise;
  //await page.waitForTimeout(3000);
  await page3.close();
  
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'UPSHIFT-3189' }).click();
  const page4 = await page4Promise;
  //await page.waitForTimeout(3000);
  //await setTimeout(5000);
  await page4.close();

  // test('slow test', async ({ page }) => {
  //   test.setTimeout(7000);
  // });
  
await setTimeout(7000);

  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'UPSHIFT-3188' }).click();
  const page5 = await page5Promise;
  //await page5.goto('https://cdeproducts.atlassian.net/browse/UPSHIFT-3188');
  //await page.waitForTimeout(3000);
  //await setTimeout(5000);
  await page5.close();

  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'UPSHIFT-3187' }).click();
  const page6 = await page6Promise;
  //await page.waitForTimeout(7000);
  //await setTimeout(5000);
  await page6.close();

  const page7Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'UPSHIFT-3175' }).click();
  const page7 = await page7Promise;
  //await page.waitForTimeout(7000);
  //await setTimeout(5000);
  await page7.close();

  //await setTimeout(5000);
  const page8Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'UPSHIFT-3174' }).click();
  const page8 = await page8Promise;
  //await page.waitForTimeout(3000);
  
  await page8.close();
  //await setTimeout(5000);

  //const page9Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'UPSHIFT-3173' }).click();
  //const page9 = await page9Promise;
  //await page.waitForTimeout(3000);
  //await setTimeout(6000);
  //await page9.close();
  
  
  //const page9Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'UPSHIFT-3172' }).click();
  //const page9 = await page9Promise;


  //await page.waitForTimeout(3000);
  //await page9.close();
  //await page.getByTestId('header-tab-1').click();

  //await setTimeout(4000);
  await page.getByRole('link', { name: '2', exact: true }).click();
  await setTimeout(2000);
  await page.getByRole('link', { name: '3', exact: true }).click();
  await setTimeout(2000);
  await page.getByRole('link', { name: '4', exact: true }).click();
  await setTimeout(2000);
  await page.getByRole('link', { name: '5' }).click();
  await setTimeout(2000);
  await page.locator('li').filter({ hasText: '»' }).click();
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/catalog/default/component/Jira/stories#');
});