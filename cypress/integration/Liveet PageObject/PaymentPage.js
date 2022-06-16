/// <reference types= "cypress" />
class PaymentPage {
    getPaymentButton()
    {
      return  cy.get(':nth-child(6) > .nav-link')
    }
    getNotification()
    {
      return  cy.get('.notification')
    }
    getFilterButton()
    {
      return  cy.get('.col-lg-2 > .btn')
    }
}
export default PaymentPage