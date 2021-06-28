/// <reference types="cypress" />

describe("Test Contact Us via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('http://www.webdriveruniversity.com/')
//        cy.get('#contact-us').click({force: true})
       //   cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
          cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
          cy.title().should('include', 'WebDriver | Contact Us');
          cy.url().should('include', 'contactus');
          cy.get('[name="first_name"]').type('Joe');
          cy.get('[name="last_name"]').type('Smith');
          cy.get('[name="email"]').type('JohnSmith@o2.pl');
          cy.get('textarea.feedback-input').type('We need more practice with cypress');
          cy.get('[type="submit"]').click();
          cy.get('h1').should('have.text', 'Thank You for your Message!')
    });
    
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
      //  cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('[name="first_name"]').type('Tom');
        cy.get('[name="last_name"]').type('Smith');
   //   cy.get('[name="email"]').type('JohnSmith@o2.pl');
        cy.get('textarea.feedback-input').type('We need more practice with cypress');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required Error: Invalid email address')
    });
})