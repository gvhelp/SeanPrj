
module.exports = {
     verifyValueCount: function(rentvalue) {
		 var cnt=0; 
		 TestHelper.isElementPresent('SeanValuesPage1','txt_val_1').then(function(){
			 cnt++;			 
		 })
		 
		 TestHelper.isElementPresent('SeanValuesPage1','txt_val_2').then(function(){
			 cnt++;			 
		 })
		 TestHelper.isElementPresent('SeanValuesPage1','txt_val_3').then(function(){
			 cnt++;			 
		 })
		 TestHelper.isElementPresent('SeanValuesPage1','txt_val_4').then(function(){
			 cnt++;			 
		 })
		 TestHelper.isElementPresent('SeanValuesPage1','txt_val_5').then(function(){
			 cnt++;			 
		 })
		 TestHelper.isElementPresent('SeanValuesPage1','txt_ttl_val').then(function(){
			 cnt++;			 
		 })
		 
		 return cnt;
		 
		 
	 },
	 
	 verifyTxt1ValuesGreaterThanZero: function(){
		 var li_txt;
		 var b_exp;
		TestHelper.isElementPresent('SeanValuesPage1','txt_val_1').then(()=>{                   
                 TestHelper.getText('SeanValuesPage1','txt_val_1').then((txt)=>{
					  li_txt = parseInt(txt);
					 if (li_txt > 0) {
						 b_expt=true;
					 }
					  else {
						  b_expt=false;
					  }
			})
			expect(b_exp).to.be.true;
		}
	 }
	 
	 verifyTxt2ValuesGreaterThanZero: function(){
		 var li_txt;
		 var b_exp;
		TestHelper.isElementPresent('SeanValuesPage1','txt_val_2').then(()=>{                   
                 TestHelper.getText('SeanValuesPage1','txt_val_2').then((txt)=>{
					  li_txt = parseInt(txt);
					 if (li_txt > 0) {
						 b_expt=true;
					 }
					  else {
						  b_expt=false;
					  }
			})
			expect(b_exp).to.be.true;
		}
	 }
	 
	 verifyTxt3ValuesGreaterThanZero: function(){
		 var li_txt;
		 var b_exp;
		TestHelper.isElementPresent('SeanValuesPage1','txt_val_3').then(()=>{                   
                 TestHelper.getText('SeanValuesPage1','txt_val_3').then((txt)=>{
					  li_txt = parseInt(txt);
					 if (li_txt > 0) {
						 b_expt=true;
					 }
					  else {
						  b_expt=false;
					  }
			})
			expect(b_exp).to.be.true;
		}
	 }
	 
	 verifyTxt4ValuesGreaterThanZero: function(){
		 var li_txt;
		 var b_exp;
		TestHelper.isElementPresent('SeanValuesPage1','txt_val_4').then(()=>{                   
                 TestHelper.getText('SeanValuesPage1','txt_val_4').then((txt)=>{
					  li_txt = parseInt(txt);
					 if (li_txt > 0) {
						 b_expt=true;
					 }
					  else {
						  b_expt=false;
					  }
			})
			expect(b_exp).to.be.true;
		}
	 }
	 verifyTxt5ValuesGreaterThanZero: function(){
		 var li_txt;
		 var b_exp;
		 // isElementPresent -> just same as document.getElementById("txtcurrency")
		TestHelper.isElementPresent('SeanValuesPage1','txt_val_5').then(()=>{                   
                 TestHelper.getText('SeanValuesPage1','txt_val_5').then((txt)=>{
					  li_txt = parseInt(txt);
					 if (li_txt > 0) {
						 b_expt=true;
					 }
					  else {
						  b_expt=false;
					  }
			})
			expect(b_exp).to.be.true;
		}
	 }
	 
	 verifyTxtTotalValuesGreaterThanZero: function(){
		 var li_txt;
		 var b_exp;
		 // isElementPresent -> just same as document.getElementById("txtcurrency")
		TestHelper.isElementPresent('SeanValuesPage1','txt_ttl_val').then(()=>{                   
                 TestHelper.getText('SeanValuesPage1','txt_ttl_val').then((txt)=>{
					  li_txt = parseInt(txt);
					 if (li_txt > 0) {
						 b_expt=true;
					 }
					  else {
						  b_expt=false;
					  }
			})
			expect(b_exp).to.be.true;
		}
	 }
	 
	 verifyTheCurrencyFormat: function(field){
		  var currencyFormat = /^\d+(\.\d{1,2})?$/;
		 switch (field) {
           case 'txt_val_1':
		       TestHelper.getText('SeanValuesPage1','txt_val_1').then((txt) =>{
				   expect(currencyFormat.test(currency)).to.be.true;
            case 'txt_val_2':
		       TestHelper.getText('SeanValuesPage1','txt_val_2').then((txt) =>{
				   expect(currencyFormat.test(currency)).to.be.true;				   
			case 'txt_val_3':
		       TestHelper.getText('SeanValuesPage1','txt_val_3').then((txt) =>{
				   expect(currencyFormat.test(currency)).to.be.true;
            case 'txt_val_4':
		       TestHelper.getText('SeanValuesPage1','txt_val_2').then((txt) =>{
				   expect(currencyFormat.test(currency)).to.be.true;
            case 'txt_val_5':
		       TestHelper.getText('SeanValuesPage1','txt_val_2').then((txt) =>{
				   expect(currencyFormat.test(currency)).to.be.true;				   				   
			case 'txt_ttl_val':
		       TestHelper.getText('SeanValuesPage1','txt_ttl_val').then((txt) =>{
				   expect(currencyFormat.test(currency)).to.be.true;				   	   
		    }
			
	   }
		 
	 }
	 
	 verifyTheSumTotal(): function(){
		 //TestHelper is just same as document.getElementById("txtcurrency")
		 
		 var total = TestHelper.getText('SeanValuesPage1','txt_ttl_val');
		 var val_1 = TestHelper.getText('SeanValuesPage1','txt_val_1');
		 var val_2 = TestHelper.getText('SeanValuesPage1','txt_val_2');
		 var val_3 = TestHelper.getText('SeanValuesPage1','txt_val_3');
		 var val_4 = TestHelper.getText('SeanValuesPage1','txt_val_4');
		 var val_5 = TestHelper.getText('SeanValuesPage1','txt_val_5');
		 expect(parseInt(total)).to.be.equal((parseInt(val_1))+(parseInt(val_2))+(parseInt(val_3))+(parseInt(val_4))+(parseInt(val_5)))
		 
		 
	 }


}//module