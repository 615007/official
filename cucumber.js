// module.exports = {
//     default: {
//         // format: [
//         //     'node_modules/cucumber-pretty',
//         //     'node_modules/allure-cucumberjs'
//         // ],
//         formatOptions: {
//             snippetInterface: 'async-await',

//         },
//         paths: [
//             'tests/featurefile/*.feature'
//         ],
//         //publishQuiet: true,
//         dryRun: false,
//         import: [
//             'tests/stepdefinition/*.js',
//             'setup/assertions.js',
//             'setup/hooks.js'

//         ]
//     }
// };

const path = require('path');

module.exports = {
    default: {
        format: [
            'json:./target/reports/cucumber-report.json',




        ],
        formatOptions: {
            snippetInterface: 'async-await'
        },
        paths: [
            'tests/featurefile/*.feature'
        ],
        dryRun: false,
        import: [
            'tests/stepdefinition/*.js',
            'setup/assertions.js',
            'setup/hooks.js'
        ]
    }
};

// const path = require('path');

// module.exports = {
//     default: {
//         format: [
//             'node_modules/cucumber-pretty',
//             path.resolve('reporter.js')
//         ],
//         formatOptions: {
//             snippetInterface: 'async-await'
//         },
//         paths: [
//             'tests/featurefile/*.feature'
//         ],
//         dryRun: false,
//         import: [
//             'tests/stepdefinition/*.js',
//             'setup/assertions.js',
//             'setup/hooks.js'
//         ]
//     }
// };

// const path = require('path');

// module.exports = {
//     default: {
//         format: [
//             'node_modules/cucumber-pretty',
//             `"${path.resolve('reporter.js')}"`
//         ],
//         formatOptions: {
//             snippetInterface: 'async-await'
//         },
//         paths: [
//             'tests/featurefile/*.feature'
//         ],
//         dryRun: false,
//         import: [
//             'tests/stepdefinition/*.js',
//             'setup/assertions.js',
//             'setup/hooks.js'
//         ]
//     }
// };
