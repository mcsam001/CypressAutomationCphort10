/// <reference types="cypress"/>
describe('My Test suite', function () {
    it('Presentation Testcase', function () {
        //working with promise 
        cy.visit('http://www.qualesconsulting.com/').then(() => {


            cy.wait(5000)

        })
        cy.get('#contactform-name').type('Mcsam')
        cy.get('#contactform-email').type('okikemcsam@gmail.com')
        cy.get('#contactform-phone').type('+23409019259545')
        cy.get('#contactform-body').type('Trust the process')


        cy.get('#btnchange').click()


    })
})