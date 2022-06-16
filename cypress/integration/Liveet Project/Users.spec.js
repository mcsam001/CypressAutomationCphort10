/// <reference types= "cypress"/>
import LogInPage from '../Liveet PageObject/LogInPage'
import HomePage from '../Liveet PageObject/HomePage'
import UsersPage from '../Liveet PageObject/UsersPage'

describe('LiveetAutomation;Admin WebApp Test Suite', function () {
    beforeEach(() => {
        //runs once before all tests in the block
        cy.fixture("LiveetData").then(function (data) {
            this.data = data
        })
    })
    it('Users Filter TestCase', function () {
        const logInPage = new LogInPage()
        const homepage = new HomePage()
        const usersPage = new UsersPage 
        //visit url
        logInPage.visitUrl()
        // Get Username field and type
       logInPage.getLogInUsername().type(this.data.username)
        // Get password field and type 
        logInPage.getLogInPassword().type(this.data.password)
        // Get submit Button and click
        logInPage.getLogInSubmitButton().click()
        // Logo brand assertion
        homepage.getHomepageLogo().should('be.visible')
        // Get user button and click
        usersPage.getUsersbutton().click()
        // Get By Users name field
        usersPage.getUsersnameField().type(this.data.Usersusername)
        usersPage.getUsersbutton().click()
        // Get By phone number field and type
        usersPage.getUsersPhoneNumber().type(this.data.phonenumber)
        // Get Filter button and click
        usersPage.getUsersFilterButton().click({ force: true })
        // Notification pop up
        usersPage.getUsersNotification().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })

    })
    
})