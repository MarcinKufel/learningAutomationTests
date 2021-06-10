/// <reference types="Cypress" />

describe("Test Contact Us via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
//        cy.visit('http://www.webdriveruniversity.com/')
//        cy.get('#contact-us').click({force: true})
          cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
          cy.get('[name="first_name"]').type('Joe')
          cy.get('[name="last_name"]').type('Smith')
          cy.get('[name="email"]').type('JohnSmith@o2.pl')
          cy.get('textarea.feedback-input').type('We need more practice with cypress')
    });
    
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
    });
})