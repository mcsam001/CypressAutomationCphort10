/// <reference types= "cypress"/>
class HomePage {
    getEditBox() {
        return cy.get(':nth-child(1) > .form-control')
    }

    getGender() {
        return cy.get("select")
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getEntrepreneur() {
        return cy.get('#inlineRadio3')
    }
}
export default HomePage