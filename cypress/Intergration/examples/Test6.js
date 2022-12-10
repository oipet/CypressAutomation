//cypress - Spec  - any test case is a spec file

/// <reference types="Cypress" />

describe('My Fifth Test Suite', function () {
    it('My First Test case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //cy.get('div.mouse-hover-content').invoke('show')
        //cy.contains('Top').click()
        //cy.url().should('include','top')
        //if you do not care to check that hover works and only click on the hidden menu

        cy.contains('Top').click({ force: true })
    })

})

