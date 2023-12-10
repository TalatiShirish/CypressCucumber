/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import FeedbackPage from "./feedbackPage"

Given ("I open feedback page",()=>{
FeedbackPage.visit();
})

And("I feel feedback form",()=>{
FeedbackPage.fillFeedbackForm();
})

And("I click on send button",()=>{
FeedbackPage.submitFeedbackForm();
})