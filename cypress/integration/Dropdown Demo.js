/// <reference types= "cypress" />
describe("My Third Test Suite", function() 
{

it("My ThirdTest case", function() {

//CheckBoxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
//cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
cy.get("input[type='checkbox']").check(["option1"])
cy.get("input[type='checkbox']").check(["option2"])
cy.get("input[type='checkbox']").check(["option3"])

//cy.get("input[type='checkbox']").uncheck(["option1"]).should("not.be.checked")
//cy.get('input[type="checkbox"]').uncheck(["option2"]).should("not.be.checked")
//cy.get('input[type="checkbox"]').uncheck(["option3"]).should("not.be.checked")

// Static Dropdown
cy.get("select").select("option1")

//dynamic Dropdown
cy.get("#autocomplete").type("ind")
cy.get(".ui-menu-item div").each(($e1, index, $list) => {

    if($e1.text()==="india")
    {
     $e1.click()
    }
    //cy.get("#automation").should("have.value","india")

})

//visible & invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//radio buttons 
cy.get('[value="radio2"]').check(["radio2"])





} )


} )