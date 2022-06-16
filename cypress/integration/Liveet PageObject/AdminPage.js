/// <reference types= "cypress"/>
class AdminPage {
    getAdminButton() {
        return cy.get(':nth-child(13) > .nav-link')
    }
    getCreateStaffButton() {
        return cy.get('[style="display: flex; justify-content: flex-end; margin-bottom: 5px;"] > .btn')
    }
    getNameField() {
        return cy.get('form > :nth-child(1) > :nth-child(3)')
    }
    getUsernameField() {
        return cy.get('form > :nth-child(1) > :nth-child(4)')
    }
    getEmailAdressField() {
        return cy.get('form > :nth-child(1) > :nth-child(5)')
    }
    getPasswordField() {
        return cy.get('form > :nth-child(1) > :nth-child(6)')
    }
    getOrganiserModule() {
        return cy.get(':nth-child(1) > :nth-child(1) > .custom-control-label')
    }
    getEventModule() {
        return cy.get(':nth-child(1) > :nth-child(2) > .custom-control-label')
    }
    getFaceVerificationModule() {
        return cy.get(':nth-child(2) > :nth-child(1) > .custom-control-label')
    }
    getUserModule() {
        return cy.get(':nth-child(2) > :nth-child(2) > .custom-control-label')
    }
    getSubmitButton() {
        return cy.get('.col > .btn')
    }
    getNotification() {
        return cy.get('.notification')
    }
    getCloseButton() {
        return cy.get('.close > [aria-hidden="true"]')
    }
    getUpdateProfileButton() {
        return cy.get('[index="2"] > :nth-child(8) > .d-flex > .btn')
    }
    getEventConfigureModule() {
        return cy.get(':nth-child(1) > :nth-child(4) > .custom-control-label')
    }
}
export default AdminPage 