//cypress - Spec  - any test case is a spec file

/// <reference types="Cypress" />

describe('My Second Test Suite', function ()
{
    it('My First Test case', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get act like findElement of selenium
  
        //Parent child 
        cy.get('.products').as('productLocator') //alias 
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
              cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


    })

})

