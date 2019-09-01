Feature: SeanTest page1

    @silver
    Scenario Outline: 
    Given I load the url
    When I enter valid credentials
	Then I Need to verify the right count of values appear on the screen is equals 6
	Then I Need to verify the values on the screen are greater than 0
	Then I Need to verify the values of "txt_val_1" is formatted as currency
	Then I Need to verify the values of "txt_val_2" is formatted as currency
	Then I Need to verify the values of "txt_val_3" is formatted as currency
	Then I Need to verify the values of "txt_val_4" is formatted as currency
	Then I Need to verify the values of "txt_val_5" is formatted as currency
	Then I Need to verify the values of "txt_ttl_val" is formatted as currency
	Then I Need to verify the total balance matches the sum of the values

    
  