/// <reference types= "cypress" />
describe("Calender Test suite",function() 
{
    it("Calender Testcase", function()
    {
       cy.visit("https://www.phptravels.net/")
       cy.xpath("//input[@id='checkin']") .click()
      cy.xpath("//div[@class='datepicker--cells datepicker--cell-days']/div")
      .each(($e1, index, $list)=> {
         var dateName=$e1.text()
         if(dateName=='14')
         {
           cy.wrap($e1).click()
         }
     })

    })
})