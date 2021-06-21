/// <reference types="cypress" />

describe("Iterate over elements", () => {
    it("Log information of all hair care products ", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('ul>li').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.someMethod() === 'something') {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap($el).click()
            } else {
                // do something else
            }
        })
    });
    it("Add specific product to basket", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    });




})