/// <reference types= "cypress"/>
class OrganiserPage {
    getOrganiserButton() {
        return cy.get(':nth-child(3) > .nav-link')
    }
    getCreateOrganiserButton() {
        return cy.get('[style="display: flex; justify-content: space-between; margin-bottom: 5px;"] > .btn-primary')
    }
    getOrganiserNameField() {
        return cy.get('#OrganizationName')
    }
    getOrganiserEmailAddressField() {
        return cy.get('#OrganizationEmail')
    }
    getOrganiserPhoneNumber() {
        return cy.get('#OrganizationPhone')
    }
    getOrganiserHomeAddress() {
        return cy.get('#OrganizationAddress')
    }
    getOrganiserUsernameField() {
        return cy.get('#OrganizationUsername')
    }
    getOrganiserPasswordField() {
        return cy.get('#OrganizationPassword')
    }
    getSubmitButton() {
        return cy.get('.modal-footer > .btn-primary')
    }
    getViewStaffButton() {
        return cy.get('[index="0"] > :nth-child(8) > .d-flex > a.btn')
    }
    getEnableStatusButton() {
        return cy.get('.d-flex > :nth-child(1)')
    }
    getNotification() {
        return cy.get('.notification')
    }
    getReturnPageButton() {
        return cy.get('#Capa_1')
    }
    getUpadateProfileButton() {
        return cy.get('[index="0"] > :nth-child(8) > .d-flex > :nth-child(2)')
    }
    getUpdateOrganiserButton() {
        return cy.get('.modal-footer > .btn-primary')
    }
    getLogoutButton() {
        return cy.get('[index="0"] > :nth-child(8) > .d-flex > :nth-child(3)')
    }

}
export default OrganiserPage