/// <reference types= "cypress" />
describe("Calender Test suite", function () {
  it("Calender Testcase", function () {
    cy.visit("demo.automationtesting.in/Datepicker.html")
    cy.get(".imgdp").click()
    cy.get("tr td a").each(($e1, index, $list) => {
      const date = $e1.text()
      if (date == '2') {
        cy.get("tr td a").eq(index).click()
        expect(date).to.equal('2')
      }
    })  

  })
})