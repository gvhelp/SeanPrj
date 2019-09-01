//Load the Page Object files
const tp = require('../PageObjects/TestPage1.js');

var {Given,When,Then} = require('cucumber');

 Then(/^I Need to verify the right count of values appear on the screen equal "6"$/, (exp_cnt,callback) => {
	var cnt=tp.verifyValueCount();
	 expect(cnt).to.equal(exp_cnt);
	callback();
 });
 
  Then(/^I Need to verify the values on the screen are greater than 0$/, (callback) => {
	tp.verifyTxt1ValuesGreaterThanZero();
	tp.verifyTxt2ValuesGreaterThanZero();
	tp.verifyTxt3ValuesGreaterThanZero();
	tp.verifyTxt4ValuesGreaterThanZero();
	tp.verifyTxt5ValuesGreaterThanZero();
	tp.verifyTxtTotalValuesGreaterThanZero();
	callback();
 });
 
 Then(/^I Need to verify the values of "([^"]*)" is formatted as currency$/,(field,callback) =>{
		tp.verifyTheCurrencyFormat(field); 
	});
	
	Then(/^Need to verify the total balance matches the sum of the values$/,(callback) =>{
		tp.verifyTheSumTotal();
	});


 
 