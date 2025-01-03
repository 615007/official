const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Open the first page
  await page.goto('https://example.com');
  console.log('First page title:', await page.title());

  // Open a new tab
  const newPage = await context.newPage();
  await newPage.goto('https://another-example.com');
  console.log('New page title:', await newPage.title());

  // Switch back to the previous tab
  const pages = await browser.pages();
  const currentPageIndex = pages.indexOf(newPage);

  if (currentPageIndex > 0) {
    const previousPage = pages[currentPageIndex - 1];
    await previousPage.bringToFront();
    console.log('Previous page title:', await previousPage.title());
  }

  // Close the browser
  await browser.close();
})();
