/// <reference types="Cypress" />
describe("Selector examples", () => {
    it("Examples of Selectors via WebdriverUni Contact Us Page", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        //By tag
        cy.get("input");

        //By attribute name and value
        cy.get("input[name='first']");

        //By id
        cy.get("#contact_me");

        //By class
        cy.get(".feedback-input");

        //By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        //By two different attributes
        cy.get("[name='email'][placeholder='Email Adress']")

        //By xpath
        cy.xpath("//input[@name='first_name']")
    })
})