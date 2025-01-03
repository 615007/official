// const { CucumberJSAllureFormatter, AllureRuntime } = require('allure-cucumberjs');
// const path = require('path');

// class Reporter extends CucumberJSAllureFormatter {
//     constructor(options) {
//         super(
//             options,
//             new AllureRuntime({ resultsDir: path.resolve('allure-results') }),
//             {}
//         );
//     }
// }

// module.exports = Reporter;

const report = require('multiple-cucumber-html-reporter');


report.generate({
    jsonDir: './target/reports', // Path to the directory containing JSON files
    reportPath: './target/reports/html-report', // Path where the HTML report will be saved
    openReportInBrowser: true,
    displayReportTime: false,
    metadata: {
        browser: {
            name: 'chrome',
            version: '91'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '20.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Custom project' },
            { label: 'Release', value: '1.2.3' },
            { label: 'Cycle', value: 'B11221.34321' },
            { label: 'Execution Start Time', value: new Date().toLocaleString() },
            { label: 'Execution End Time', value: new Date().toLocaleString() }
        ]
    }
});



