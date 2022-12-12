//cypress - Spec  - any test case is a spec file

/// <reference types="Cypress" />


import Homepage from '../pageObjects/Homepage'
import ProductPage from '../pageObjects/ProductPage'


describe('My 8th Framework Test Suite', function () {
    //test
    before(function () {
        //runs once before all tests in the block
        cy.fixture('example2').then(function (data)
        { 
            this.data = data

        })
    })


    it('My First Test case', function () {
        //when you declare the timetout at the start of the spec-scenario is global an all the steps
        //will take it
        Cypress.config('defaultCommandTimeout', 8000)
        const homePage = new Homepage()
        const productPage = new ProductPage()
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox().type(this.data.name)

        homePage.getGender().select(this.data.gender)

        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpeneaur().should('be.disabled')
        //when you declare the time before a step is only applied for it---explicit wait
        Cypress.config('defaultCommandTimeout', 8000)
        //cy.pause()
        homePage.getShopTab().click()
        //custom command
        //multiselection from data in json file as array
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        }
        );
        //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        productPage.checkOutButton().click()
        var sum=0
        //cy.selectProduct('Nokia Edge')

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)

        }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()

            expect(Number(total)).to.equal(sum)

        })


        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    
     }

    )



})

