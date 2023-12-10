import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep("I want to wait {int} milliseconds",time=>{
    cy.wait(time);
})

defineStep("I see {string} in the title",title=>{
    cy.title().should('include', title);
})

defineStep("I see {string} in the url", text=>{
    cy.url().should('include',text);
})

defineStep('I open Zerobanks homepage',()=>{
    cy.visit("http://zero.webappsecurity.com/index.html")
})