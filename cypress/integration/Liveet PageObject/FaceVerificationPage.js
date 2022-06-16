/// <reference types="cypress" />
class FaceVerificationPage {
    getFaceVerificationButton() {
        return cy.get(':nth-child(9) > .nav-link')
    }
    getByOrganiserNameField() {
        return cy.get('form > .row > :nth-child(1)')
    }
    getByEventNameField() {
        return cy.get('.row > :nth-child(2)')
    }
    getByPhoneNumberField() {
        return cy.get('.row > :nth-child(3)')
    }
    getSubmitButton() {
        return cy.get('.col-lg-2 > .btn')
    }
    getNotification() {
        return cy.get('.notification')
    }
}
export default FaceVerificationPage
