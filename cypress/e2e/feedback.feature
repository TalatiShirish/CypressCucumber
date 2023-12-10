Feature: Send feedback
As a valid user
I want to send feedback via form


Scenario: Submit Feedback form
Given I open feedback page
And I feel feedback form
Then I click on send button
Then I see "/sendFeedback.html" in the url 