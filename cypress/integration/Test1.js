/// <reference types= "cypress" />
describe("My first Test Suite", function() 
{

it("My FirstTest case", function() {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get(".search-keyword").type("ca")
cy.wait(2000)
//selenium get hit url in browswer, cypress get acts like Findelement of selenium 
cy.get(".product:visible").should("have.length",4)
//parent child chaining 
cy.get(".products").as("productlocator")
cy.get(".products").find(".product").should("have.length",4)
cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click().then(function()
{
    console.log("sf")
})

cy.get(".products").find(".product").each(($e1, index, $list) => {

const textVeg=$e1.find("h4.product-name").text()
if(textVeg.includes("cashews"))
{
$e1.find("button").click()
}
})

//asert if logo text is displayed correctly
cy.get(".brand").should("have.text","GREENKART")

//this is to print in logs
cy.get(".brand").then(function(logoelement)
{
    cy.log(logoelement.text())
})
//const logo=cy.get(".brand")
//cy.log(logo.text())
} )


} )
