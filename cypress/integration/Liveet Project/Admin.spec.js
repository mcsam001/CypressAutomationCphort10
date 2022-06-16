/// <reference types= "cypress"/>
import LogInPage from '../Liveet PageObject/LogInPage'
import HomePage from '../Liveet PageObject/HomePage'
import AdminPage from '../Liveet PageObject/AdminPage'

describe('LiveetAutomation;Admin WebApp Test Suite', function () {
    beforeEach(() => {
        //runs once before all tests in the block
        cy.fixture("LiveetData").then(function (data) {
            this.data = data
        })
    })

    it('Login TestCase', function () {
        const logInPage = new LogInPage()
        const homepage = new HomePage()
        const adminPage = new AdminPage()
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
    it('Create Admin Profile TestCase', function () {
        const adminPage = new AdminPage()
        // Get 'Adim button' and click
        adminPage.getAdminButton().click()
        // Get 'create admin' button and click
        adminPage.getCreateStaffButton().click({ force: true })
        // Get 'username' field and type
        adminPage.getNameField().type(this.data.name)
        // Get 'password field and type 
        adminPage.getUsernameField().type(this.data.adminusername)
        // Get Email address field and type
        adminPage.getEmailAdressField().type(this.data.email)
        // Get 'Password field and type 
        adminPage.getPasswordField().type(this.data.adminpassword)
        // Get 'Organiser module' and click
        adminPage.getOrganiserModule().click()
        // Get 'Event Module' and click
        adminPage.getEventModule().click()
        // Get 'Face verification Module' and click
        adminPage.getFaceVerificationModule().click()
        // Get 'User module' and click
        adminPage.getUserModule().click()
        // Get 'submit button' and click
        adminPage.getSubmitButton().click({ force: true })
        // Get Notificcation Pop up
        adminPage.getNotification().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("admin_username already exists")).to.be.false
            adminPage.getCloseButton().click({ force: true })

        })
        it('Upadate Admin Profile TestCase', function () {
            //Get Update Profile Button and click
            adminPage.getUpdateProfileButton().click()
            // Get Email address field and type
            adminPage.getEmailAdressField().type(this.data.upadteadminemail)
            // Get Event Configure module and click
            adminPage.getEventConfigureModule().click()
            // Get Notification pop up
            adminPage.getNotification().then(function (element) {
                const actualText = element.text()
                expect(actualText.includes("Success")).to.be.true

            })
        })
    })
})
