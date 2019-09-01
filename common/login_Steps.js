const localtesthelper = require('../../Test_Modules/common/commontesthelpers.js');
const saenTestepage= require('../../Test_Modules/SeanTest/PageObjects/TestPage1');


var self=this;
var {Given,When,Then, setDefaultTimeout} = require('cucumber');

    setDefaultTimeout(60 * 1000);
    // 'use strict';

    Given(/^I load the url$/, function(callback) {       
        browser.ignoreSynchronization = true; // Non-Angular Pages
        // Performance Measuring
        var t1 = new Date(); // Measure page load time

        // allow user to specify baseUrl in testdata file, or as a cli arg as protractor expects
        let baseUrl = browser.params.login.baseUrl.length > 0 ?
        browser.params.login.baseUrl : browser.baseUrl;

        if (!baseUrl) {
            console.warn('\nPlease specify a valid baseUrl\n')
            expect(baseUrl.length).to.have.lengthOf.above(0, 'please specify a valid baseUrl')
            callback();
        }
        browser.driver.get(baseUrl).then(() => {
            var waitTime = Math.abs(t1 - new Date()) / 1000;
                 callback();
        });
    });

    When(/^I enter valid credentials$/, function(callback) {
        /* 
         * this way we support the old way of putting this info into the webhmi-testdata.json file
         * but we allow users to pass in user/pass via --params.login.user --params.login.password  
         * or for them to set them via the "user" or "password" environment variable
         */
        const usernameFromConfigFile = browser.params.login.user;
        const passwordFromConfigFile = browser.params.login.password;

        const userName = usernameFromConfigFile.length > 1 ?
            usernameFromConfigFile : browser.params.login.user;

        const password = passwordFromConfigFile.length ?
            passwordFromConfigFile : browser.params.login.password;

        loginPage.setName(userName).then(function() {
            loginPage.setPassword(password).then(function() {
                    loginPage.clickButton('loginPage','login').then(function(){
                        callback();
                    })
            });
        });
    });

    



    

    
