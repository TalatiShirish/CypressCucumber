/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./loginPage";



Given("I open login Page", () => {
    LoginPage.visit()
    // cy.visit("http://zero.webappsecurity.com/login.html");

})

When("I enter username as {string}", username => {
    LoginPage.fillUsername(username);
})

When("I enter password as {string}", password => {
    LoginPage.fillPassword(password);
})

Then("I should see error message",()=>{
    LoginPage.shouldSeeErrorMessage();
})

// When("I submit login",()=>{

//     // fill the username
//     LoginPage.fillUsername("username")
//     // cy.get('#user_login').type('username');
//     // file the password
//     LoginPage.fillPassword("password")
//     // cy.get('').type('password');
//     LoginPage.clickLogiinButton();
//     // cy.get("").click();
//     // Click onthe login button

// })

When("I click on Login button", () => {
    LoginPage.clickLogiinButton();

})

Then("I should see homepage", () => {

    cy.get('#account_summary_tab').should('have.text', 'Account Summary').should('be.visible');

})