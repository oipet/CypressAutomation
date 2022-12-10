//cypress - Spec  - any test case is a spec file

/// <reference types="Cypress" />

describe('My Fourth Test Suite', function () {
    it('My First Test case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert --> when a pop up occur
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //how to handle child tabs
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include','rahul')

        cy.go('back')



    })

})

