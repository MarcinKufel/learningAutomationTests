/// <reference types="cypress" />

describe("JSON Object", () => {
    it("Json Object Example", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);

    });

})