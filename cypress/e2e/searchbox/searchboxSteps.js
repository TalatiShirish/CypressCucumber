import { defineStep } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "./searchboxPag";

When("I should type {string} in search textbox and press Enter key",searchText=>{
    SearchPage.typeTextInSearchBox(searchText);

})

Then("Search Result page should contains {string}",resultsText=>{
    SearchPage.assertSearchResultsContainsText(resultsText);
})


