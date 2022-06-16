/// <reference types= "cypress"/>
import LogInPage from '../Liveet PageObject/LogInPage'
import HomePage from '../Liveet PageObject/HomePage'
import ActivityLog from '../Liveet PageObject/ActivityLogPage'

describe('LiveetAutomation;Admin WebApp Test Suite', function () {
    before(function () {
        //runs once before all tests in the block
        cy.fixture("LiveetData").then(function (data) {
            this.data = data
        })
    })
    it('ActivityLog TestCase', function () {
        const logInPage = new LogInPage()
        const homepage = new HomePage()
        const activityLog = new ActivityLog()
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
        // Get Activity Log button and click
        activityLog.getActivityLogButton().click()
        // Get AdimLog button and click
        activityLog.getAdimLogButton().click({ force: true })
        //cy.get('#actLogs-tabpane-adminActivity > :nth-child(1) > :nth-child(1) > .col > form > .row > :nth-child(1)').type(22)
        

    })
})
//"env": {
   // "testUrl": "https:/google.com"
 // },
// cy.visit(Cypress.env("testUrl"));