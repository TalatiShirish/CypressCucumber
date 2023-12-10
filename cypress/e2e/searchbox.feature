Feature: Search related features

@smoke
Scenario: Check the Search page is displayed
Given I open Zerobanks homepage
Then I should type "some text" in search textbox and press Enter key
Then Search Result page should contains "Search Results:"