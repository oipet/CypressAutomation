//cypress - Spec  - any test case is a spec file

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe('Frames Test', function () {
    it('Demo example', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")

        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

        //cy.get('')
      
    })

})

