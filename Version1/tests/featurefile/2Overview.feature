Feature: Login using valid credentials in the Flowsource website

Background:
        Given User in the website and click on the LoginSign in using Open ID of the flowsource website
        When User enter the credentials and click the signin       
        Then User click on filer and user search for auto and click Airhob
    @regression
    

Scenario:TC003_To verify whether user is able to view details in About section of Overview module

        Then User is on Overview first screen
        Then User view details in About section
        Then View source link is displayed
        Then View Techdocs link is displayed
        Then Schedule refresh entity link is displayed
        Then Edit metadata link is displayed
        Then Description is displayed
        Then System is displayed
        Then Parent component is displayed
        Then Type is displayed
        Then Lifecycle is displayed
        Then Tag is displayed

Scenario:TC004_To verify whether user is able to view details in Relations section of Overview module

        Then Relations is displayed
        Then View graph is displayed

Scenario:TC005_To verify whether user is able to view details in Links section of Overview module

        Then FooterLinks is displayed

Scenario:TC006_To verify whether user is able to view details in Has subcomponents section of Overview module

        Then Has subcomponents is displayed



Scenario:TC007_Navigate to Overview tab links
 
        Then Verify View Source link is displayed
        Then Verify Techdocs link is displayed
        Then Verify Schedule refresh link is displayed
        Then Verify Edit metadata link is displayed
        Then Verify Owner lable is displayed
        Then Verify System lable is displayed
        Then Verify Parent component lable is displayed
        Then Verify View Graph lable is displayed
        Then Verify Source Code lable is displayed
        Then Verify Deployed Application lable is displayed
        Then Verify Deployed Shows lable is displayed
        Then Verify Deployed Select lable is displayed


        