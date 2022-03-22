/// <reference types= "cypress" />
describe("My Second Test Suite", function() 
{

it("My SecondTest case", function() {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get(".search-keyword").type('ca')
cy.wait(2000)
//selenium get hit url in browswer, cypress get acts like Findelement of selenium 

//parent child chaining 
cy.get(".products").as("productlocator")
cy.get("@productlocator").find(".product").each(($e1, index, $list) => {

const textVeg=$e1.find("h4.product-name").text()
if(textVeg.includes("cashews"))
{
$e1.find("button").click()
}
})

cy.get(':nth-child(4) > .product-action > button').click()
cy.get('.cart-icon > img').click()
cy.contains("PROCEED TO CHECKOUT").click() 
cy.get(':nth-child(14)').click()






} )


} )