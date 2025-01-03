Feature: Login using valid credentials in the Flowsource website


Scenario:TC001_To verify whether user is able to login to Flowsource application with valid credentials

Given the user is on the GitHub login page
When the user enters valid username and password
Then the user is on Catalog page

Scenario:TC002_To verify whether user is able to logout from Flowsource application

Given the user is on the Catalog page2
When the user clicks on the settings option and clicks on Sign Out option in the General tab
Then the user is logged out from the application

