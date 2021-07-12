class HomePage_PO {
    visitHomePage() {
        cy.visit(Cypress.env("webdriveruni_homepage"));
    }
}

export default HomePage_PO;