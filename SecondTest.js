describe('login and make appointment', function(){
it('login', function(){
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
    cy.get('#txt-username').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').click()
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
})
it('make appointment', function(){
//cy.get('#combo_facility').click()
cy.get('select').select('Hongkong CURA Healthcare Center')
cy.get('#chk_hospotal_readmission').click()
cy.get('#radio_program_medicaid').click()
cy.get('#txt_visit_date').click()
cy.get('#txt_visit_date').type('30/10/2020')
cy.get('select').select('Hongkong CURA Healthcare Center')
//cy.get('#sidebar-wrapper').click()
cy.get('#txt_comment').click()
cy.get('#txt_comment').type('Comment entered successfully')
cy.get('#btn-book-appointment').click()

})
it('appointment confirmation', function(){
cy.get('h2').contains('Appointment Confirmation')

})
})