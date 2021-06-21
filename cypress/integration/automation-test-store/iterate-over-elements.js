/// <reference types="cypress" />

describe("Iterate over elements", () => {
    it("Log information of all hair care products ", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    }); 
    it("Add specific product to basket", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    }); 

 


})