import { before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('I access the WebdriverUniversity Login Portal Page', () => {
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html")
})