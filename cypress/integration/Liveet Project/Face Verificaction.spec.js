/// <reference types= "cypress"/>
import LogInPage from '../Liveet PageObject/LogInPage'
import HomePage from '../Liveet PageObject/HomePage'
import FaceVerificationPage from '../Liveet PageObject/FaceVerificationPage'

describe('LiveetAutomation;Admin WebApp Test Suite', function () {
    beforeEach(() => {
        //runs once before all tests in the block
        cy.fixture("LiveetData").then(function (data) {
            this.data = data
        })
    })
    it('FaceVerification TestCase', function () {
        const logInPage = new LogInPage()
        const homepage = new HomePage()
        const faceverificationPage = new FaceVerificationPage()
        // Visit Url
        logInPage.visitUrl()
        // Get Username field and type
        logInPage.getLogInUsername().type(this.data.username)
        // Get password field and type 
        logInPage.getLogInPassword().type(this.data.password)
        // Get submit Button and click
        logInPage.getLogInSubmitButton().click()
        // Logo brand assertion
        homepage.getHomepageLogo().should('be.visible')
        // Get 'face verification' button and click
        faceverificationPage.getFaceVerificationButton().click()
        // Get'By organiser name field and type
        faceverificationPage.getByOrganiserNameField().type(this.data.faceverificationByOrganisername)
        // Get 'By event name field and type
        faceverificationPage.getByEventNameField().type(this.data.faceverificationByEventname)
        // Get 'face verification' button and click
        faceverificationPage.getFaceVerificationButton().click()
        // Get 'By phone number field and type
        faceverificationPage.getByPhoneNumberField().type(this.data.phonenumber)
        // Get 'submit button and click
        faceverificationPage.getSubmitButton().click({ force: true })
        // Get notification pop up
        faceverificationPage.getNotification().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Empty")).to.be.false
        })
    })
})