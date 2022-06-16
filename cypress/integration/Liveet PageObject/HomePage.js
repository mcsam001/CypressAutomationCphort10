/// <reference types= "cypress"/>
class HomePage {
    getHomepageLogo() {
        return cy.get('.navbar-brand')
    }
    //getUsersButton() {
        //return cy.get(':nth-child(8) > .nav-link')
    //}
    //getPaymentButton() {
        //return cy.get(':nth-child(6) > .nav-link')
    //}
    //getOrganiserButton() {
        //return cy.get(':nth-child(3) > .nav-link')
    //}
    //getAdminButton() {
        //return cy.get(':nth-child(13) > .nav-link')
   // }
    //getFaceVerificationButton() {
       // return cy.get(':nth-child(9) > .nav-link')
   // }
}
export default HomePage
