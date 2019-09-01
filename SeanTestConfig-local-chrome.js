
exports.config = {
    
    directConnect: true,
    firefoxPath: null,

    // Spec patterns are relative to the location of this config.
    specs: [
     //   '../**/*.feature'
    ],

    // Patterns to exclude.
    exclude: [],

    // Organize spec files into suites. To run specific suite, --suite=<name of suite> no suites
    suites: {
        testAlarms: [
            '../../../Test_Modules/SeanTest/Features/SeanTestPag1.feature'
        ]
    },

    
    capabilities: 
 
        {

            'tunnel-identifier': tunnelID,
            build: buildNum,
            name: testRunName + '-Chrome63-Windows10',
            browserName: 'chrome',
            chromeOptions: {
                args: [
                    //'--start-maximized',
                    '--disable-infobars',
                ]
            },
            version: '63.0',
            platform: 'Windows 10',
            screenResolution: screenResolution,
            // Metadata required for multiple reporter
            metadata: {
                browser: {
                    name: 'Chrome',
                    version: '63'
                },
                device: 'PC',
                platform: {
                    name: 'Windows',
                    version: '10'
                }
            },
            parallelData: {
                assetToSelect: 'DisplacementPump1A',
                assetToCreate: 'newtreetest123',
                treeToPick: 'Newtree123'
            }
        },

    maxSessions: 1,

    params: {
        env: 'dev',
        glob: 'browName',
        login: {

            baseUrl: process.env.user || 'https://www.exercise1.com/values',
            user: process.env.user || 'adminuser',
            password: process.env.password || 'admin12'
        }
    },

    allScriptsTimeout: 250000,

    // How long to wait for a page to load.
    getPageTimeout: 650000,

    defaultTimeoutInterval: 10000,
    // Before launching the application
    beforeLaunch: function() {

    },

    // Application is launched but before it starts executing
    onPrepare: function() {

        // Create reports folder if it does not exist
        var folderName = (new Date()).toString().split(' ').splice(1, 4).join(' ');
        var mkdirp = require('mkdirp');
        var reportsPath = "./Reports/";

        mkdirp(reportsPath, function(err) {
            if (err) {
                console.error(err);
            } else {}
        });

        browser.manage().deleteAllCookies();
        browser.manage().timeouts().pageLoadTimeout(50000);
        browser.manage().timeouts().implicitlyWait(50000);
        browser.manage().window().maximize();
        browser.manage().window().setSize(1280, 1024);

        chai = require('chai');
        expect = chai.expect;
        path = require('path');
        Cucumber = require('cucumber');
        fs = require('fs');

        // Initializing page object variables
        loginPage = require('../../../Test_Modules/common/ME_Functions.js');
       

        

        // Initializing necessary utils from ProUI-Utils module
        TestHelper = require('proui-utils').TestHelper;
        ElementManager = require('proui-utils').ElementManager;
        Logger = require('proui-utils').Logger;


        cem = new ElementManager('../../../Test_Modules/common/objectRepo.json');
        TestHelper.setElementManager(cem);
        RestHelper = require('proui-utils').RestHelper;
     
    },

    // A callback function called once tests are finished
    onComplete: function() {

    },

    // A callback function called once tests are cleaning up
    onCleanUp: function(exitCode) {

    },

    // A callback function after tests are launched
    afterLaunch: function() {

    },

    // set so that we generate a report even if webdriver times out or fails somewhere along the line
    ignoreUncaughtExceptions: true,

    resultJsonOutputFile: null,


    restartBrowserBetweenTests: false,

    // Custom framework in this case cucumber
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        // define your step definitions in this file
        require: [            
            '../Step_Definitions/SeanTest1.js',
        ],
        tags: [
            '@silver'

        ],
     
      format: ['node_modules/cucumber-pretty','json:./results.json'],
      features: true
    }
};
