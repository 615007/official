const playwright = require('playwright');
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const report = require('multiple-cucumber-html-reporter');
// const { AllureRuntime } = require('allure-cucumberjs');
// const allure = new AllureRuntime({ resultsDir: 'allure-results' });
//const report = require('multiple-cucumber-html-reporter');
// import { playwright } from '@playwright/test';
// import { setDefaultTimeout } from '@cucumber/cucumber';
// import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
setDefaultTimeout(30000);

BeforeAll(async () => {
    console.time();
    global.browser = await playwright['chromium'].launch({ headless: false })
    console.log('Browser launched successfully');

})

AfterAll(async () => {
    await global.browser.close();
    console.timeEnd();
})

Before(async () => {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
})

After(async (scenario) => {
    let name = scenario.pickle.name.replace(/ /g, '-');
    let result = scenario.result.status;
    if (scenario.result.status === 'FAILED') {
        const screenShot = await global.page.screenshot({ path: `./target/report/${result}-[${name}].png`, fullPage: true });
        console.log("Taken screenshot");
        // allure.addAttachment('Screenshot', screenshot, 'image/png');
        this.attach(screenShot);
    }
    await global.page.close();
    await global.context.close();
})
// const playwright = require('playwright');
// const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
// const { setDefaultTimeout } = require('@cucumber/cucumber');

// const { AllureRuntime } = require('allure-cucumberjs');
// const allure = new AllureRuntime({ resultsDir: 'allure-results' });


// setDefaultTimeout(30000);

// BeforeAll(async () => {
//     console.time();
//     try {
//         global.browser = await playwright['chromium'].launch({ headless: false });
//         console.log('Browser launched successfully');
//     } catch (error) {
//         console.error('Error launching browser:', error);
//         throw error; // Re-throw the error to ensure the test fails
//     }
//     console.timeEnd();
// });

// AfterAll(async () => {
//     await global.browser.close();
//     console.timeEnd();
// });

// Before(async () => {
//     global.context = await global.browser.newContext();
//     global.page = await global.context.newPage();
// });

// After(async function (scenario) {
//     let name = scenario.pickle.name.replace(/ /g, '-');
//     let result = scenario.result.status;
//     if (result === 'FAILED') {
//         // const screenShot = await global.page.screenshot({ path: `./target/report/${result}-[${name}].png`, fullPage: true });
//         console.log("Taken screenshot");
//         // this.attach(screenShot);
//         const screenshot = await global.page.screenshot();
//         allure.addAttachment('Screenshot', screenshot, 'image/png');
//     }
//     await global.page.close();
//     await global.context.close();
// });
