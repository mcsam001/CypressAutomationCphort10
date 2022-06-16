/// <reference types= "cypress"/>
import LogInPage from '../Liveet PageObject/LogInPage'
import HomePage from '../Liveet PageObject/HomePage'
import PaymentPage from '../Liveet PageObject/PaymentPage'

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
        const paymentPage = new PaymentPage()
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

        // Payment button and click
        paymentPage.getPaymentButton().click()
        // Notitfication pop up
        paymentPage.getNotification().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
        // Get Filter button and click
        paymentPage. getFilterButton().click({ force: true })
        // notification pop  up
        paymentPage.getNotification().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Error")).to.be.false
        })





    })
})