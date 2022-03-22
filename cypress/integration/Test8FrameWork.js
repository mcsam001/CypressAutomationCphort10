/// <reference types= "cypress"/>
import HomePage from '../integration/PageObjects/HomePage'
import ProductPage from '../integration/pageObjects/ProductPage'

describe("Test8Framework test suite", function()
{
    before(function() {
        //runs once before all tests in the block
cy.fixture("example").then(function(data){ 
this.data=data
})
 })

it("Test8frameworTest case", function() {

const homePage=new HomePage()
const productPage=new ProductPage()
cy.visit("https://rahulshettyacademy.com/angularpractice/")
homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
homePage.getEnterepreneaur().should("be.disabled")
homePage.getShopTab().click()

this.data.productName.forEach(function(element) {
cy.selectProduct(element)
})

productPage.checkOutButton().click()

cy.contains('Checkout').click()
cy.get('#country').type('India')
//cy.get('.suggestions > ul > li > a').click()
cy.get('.checkbox').click()
cy.get('.ng-untouched > .btn').click()
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-')
 cy.get('.alert').then(function(element)
{
    const actualText=element.text()
    expect(actualText.includes("Success")).to.be.true
})


})


})

