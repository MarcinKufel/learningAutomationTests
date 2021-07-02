/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    it("Check specific radio buttons", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        cy.get('#radio-buttons').find("input[type='radio']").first().check()
        cy.get('#radio-buttons').find("input[type='radio']").eq(1).check()


    });

})