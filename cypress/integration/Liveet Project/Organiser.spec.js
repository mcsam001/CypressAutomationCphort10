/// <reference types= "cypress"/>
import LogInPage from '../Liveet PageObject/LogInPage'
import HomePage from '../Liveet PageObject/HomePage'
import OrganiserPage from '../Liveet PageObject/OrganiserPage'

describe('LiveetAutomation;Admin WebApp Test Suite', function () 
    beforeEach(() => {
    //runs once before all tests in the block
    cy.fixture("LiveetData").then(function (data) {
        this.data = data
    })
})
    it('Login TestCase', function () {
    const logInPage = new LogInPage()
    const homepage = new HomePage()
    const organiserPage = new OrganiserPage
    // Visit Url
    logInPage.visitUrl()
    // Get Username field and type
    logInPage.getLogInUsername().type(this.data.username)
    // Get password field and type 
    logInPage.getLogInPassword().type(this.data.password)
    // Get submit Button and click
    logInPage.getLogInSubmitButton().click().wait(15000)
    // Logo brand assertion
    homepage.getHomepageLogo().should('be.visible')
})
    it('Create Organiser TestCase', function () {
    cy.fixture("LiveetData").then(function (data) {
        this.data = data
    })
    const organiserPage = new OrganiserPage
    // Get the Organiser button and click
    organiserPage.getOrganiserButton().click()
    // Get Create Organiser buuton and click
    organiserPage.getCreateOrganiserButton().click({ force: true })
    // Get Organiser name field and type 
    organiserPage.getOrganiserNameField().type(this.data.name)
    // Get Organiser Email address field and type
    organiserPage.getOrganiserEmailAddressField().type(this.data.email)
    // Get Organiser Phone number and type
    organiserPage.getOrganiserPhoneNumber().type(this.data.phonenumber)
    // Get Organiser Home address
    organiserPage.getOrganiserHomeAddress().type(this.data.address)
    // Get Organiser Username field and type
    organiserPage.getOrganiserUsernameField().type(this.data.organiserusername)
    // Get Organiser Password field and type
    organiserPage.getOrganiserPasswordField().type(this.data.organiserpassword)
    // Get Submit Button and click
    organiserPage.getSubmitButton().click({ force: true })
})
    it('Manage Substaffs TestCase', function () {
    const organiserPage = new OrganiserPage
    // Get View Staff button and click
    organiserPage.getViewStaffButton().click({ force: true })
    // Get Enable Status button and click
    organiserPage.getEnableStatusButton().click()
    // Get notification Pop up
    organiserPage.getNotification().then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("oraganiser_email exist")).to.be.false
    })
    // Get the return Page Button and click
    organiserPage.getReturnPageButton().click()

    it('Upadate Organiser TestCase', function () {
        cy.fixture("LiveetData").then(function (data) {
            this.data = data
        })
        const organiserPage = new OrganiserPage
        // Get Upadate Profile Button and click
        organiserPage.getUpadateProfileButton().click()
        // Get Organiser address field and type
        organiserPage.getOrganiserHomeAddress().type(this.data.updateorganiseraddress)
        // Get Oraganiser password and type
        organiserPage.getOrganiserPasswordField().type(this.data.upadateorganiserpassword)
        // Get the update Organiser button and click
        organiserPage.getUpdateOrganiserButton().click()
        // Get notification pop up
        organiserPage.getNotification().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("oraganiser_email exist")).to.be.false
        })
        it('Logout Organiser TestCase', function () {
            const organiserPage = new OrganiserPage
            // Get Logout button and click
            organiserPage.getLogoutButton().click({ force: true })




        })
    })




















})
})
