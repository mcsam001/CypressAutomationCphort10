/// <reference types= "cypress"/>
class LogInPage
{
visitUrl()
{
    return cy.visit('https://admin-stg.liveet.co/')
}
getLogInUsername()
{
    return cy.get(':nth-child(3) > .form-control')
}
getLogInPassword()
{
    return cy.get(':nth-child(5) > .form-control')
}
getLogInSubmitButton()
{
    return cy.get('.btn')
}
}
export default LogInPage