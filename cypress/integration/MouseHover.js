/// <reference types= "cypress"/> 
describe("my Sixth Test Suite", function() 
{

it("My SixthTest Case", function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get("div.mouse-hover-content").invoke("show")
cy.contains("Top").click({force: true})
// for force click to handle invisible modes.== cy.contains("Top").click({force: true})
cy.url().should("include","top")







})

})