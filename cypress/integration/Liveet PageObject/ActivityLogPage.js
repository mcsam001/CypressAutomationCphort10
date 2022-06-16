/// <reference types= "cypress"/>
class ActivityLog {
getActivityLogButton()
{
  return  cy.get(':nth-child(10) > .nav-link')
}
getAdimLogButton()
{
   return cy.get('#actLogs-tab-adminActivity')
}
}
export default ActivityLog