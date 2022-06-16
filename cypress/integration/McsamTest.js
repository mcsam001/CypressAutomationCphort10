/// <reference types= "cypress"/>
import HomePage from '../integration/Mcsam PageObject/Mcsam HomePage'
describe("Test8Framework test suite", function () {
    before(function () {
        //runs once before all tests in the block
        cy.fixture("example").then(function (data) {
        })
    })
    it("Test8frameworTest case", function () {
        const homePage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePage.getEditBox().type("bob")
        homePage.getGender().select("Female")
        homePage.getTwoWayDataBinding().should('have.value', 'bob')
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should("be.disabled")



        /// <reference types= "cypress"/>
        //describe("Test8Framework test suite", function()
        //{
        //before(function() {
        //runs once before all tests in the block
        //cy.fixture("example").then(function(data){
        //})
        //})
        //it("Test8frameworTest case", function() {
        //  cy.visit("https://rahulshettyacademy.com/angularpractice/")
        //cy.get(':nth-child(1) > .form-control').type("bob")
        //   cy.get("select").select("Female")
        //cy.get(':nth-child(4) > .ng-untouched').should('have.value','bob')
        //cy.get(':nth-child(1) > .form-control').should("have.attr","minlenght","2" )
        //cy.get('#inlineRadio3').should("be.disabled")
    })
})