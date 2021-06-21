/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/");
        // //The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // makeupLink.click();
        // const skinCare = cy.get("a[href*='product/category&path=']").contains("Skincare");  
        // skinCare.click();

        // //The following will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // makeupLink.click();
        // const skinCare = cy.get("a[href*='product/category&path=']").contains("Skincare");  
        // skinCare.click();

        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();  
    }); 
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
         
        // Following code will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text());

        cy.get("h1 .maintext").then(($headerTest) => {
            const headerText = $headerTest.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq('Makeup');
        })
    }); 

    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
       
        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:');
      
        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');

           //Emnedded commands (Closure)
             cy.get('#field_11').then(fnText => {
              cy.log(fnText.text())
              cy.log(fnText)
        })

        })

        //Emnedded commands (Closure)
        
    }); 


})