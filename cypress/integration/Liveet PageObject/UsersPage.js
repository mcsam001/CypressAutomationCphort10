/// <reference types= "cypress"/>
class UsersPage {
    getUsersbutton() {
        return cy.get(':nth-child(8) > .nav-link')
    }
    getUsersnameField() {
        return cy.get('.css-1s2u09g-control')
    }
    getUsersPhoneNumber() {
        return cy.get('#user_phone')
    }
    getUsersFilterButton() {
        return cy.get('.col-lg-2 > .btn')
    }
    getUsersNotification() {
        return cy.get('.notification')
    }
}
export default UsersPage