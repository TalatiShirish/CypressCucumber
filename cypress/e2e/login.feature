Feature: Log in to Application
As a valid user
I want to log in to the Application

@login
Scenario: valid login
Given I open login Page
And I want to wait 2000 milliseconds
And I see "Zero - Log in" in the title
And I see "/login" in the url
When I enter username as "username"
And I enter password as "password"
Then I click on Login button
Then I should see homepage

Scenario: Invalid Login
Given I open login Page
When I enter username as "invalid username"
And I enter password as "invalid password"
And I click on Login button
Then I should see error message