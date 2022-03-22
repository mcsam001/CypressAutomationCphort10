/// <reference types= "cypress" />
describe("My Third Test Suite", function() 
{

it("My ThirdTest case", function() {


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


// Static Dropdown
cy.get("select").select("option1")
.click

//dynamic Dropdown
cy.get("#autocomplete").type("Nigeria")
.click()





















//cy.get(".ui-menu-item div").each(($e1, index, $list) => {

    //if($e1.text()==="india")
   // {
    // $e1.click()
    //}
    //cy.get("#automation").should("have.value","india")

//})







} )


} )