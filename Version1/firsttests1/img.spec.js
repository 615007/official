

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a31ab0521b7614fc494b75314e386461-307954604.ap-southeast-1.elb.amazonaws.com:7007/');
  const page1Promise = page.waitForEvent('popup');
  //await page.locator('li').filter({ hasText: 'LoginSign in using Open ID' }).getByRole('button').click();


    //const browser =await chromium.launch();
   // const page = await browser.newPage();
    //await page.goto('google.com/');
    await page.screenshot({path:'img2.png'});
    await browser.close();


});
