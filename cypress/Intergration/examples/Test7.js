//cypress - Spec  - any test case is a spec file

/// <reference types="Cypress" />

describe('My Seventh Test Suite', function ()  {
    it('My First Test case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function (el)
        {
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })

    })

})

