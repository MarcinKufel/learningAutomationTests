/// <reference types="Cypress" />

describe("Test Contact Us via Automation test store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Jon");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?");
        cy.get('.col-md-6 > .btn').click();
    }); 
})