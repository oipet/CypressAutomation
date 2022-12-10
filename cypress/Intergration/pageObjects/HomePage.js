class HomePage {


getEditBox() {
      return cy.get('div[class= "form-group"] input[name = "name"]')
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1')
    }

    getEnterpeneaur() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return  cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage;