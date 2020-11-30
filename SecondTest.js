describe('login and make appointment', function(){
it('login', function(){
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login') //When user visit page
    cy.get('#txt-username').click() //When user clicks on "User Name" text field 
    cy.get('#txt-username').type('John Doe') //When user enters "User Name"
    cy.get('#txt-password').click() //When user clicks on "Password" text field
    cy.get('#txt-password').type('ThisIsNotAPassword') //When user enters "Password"
    cy.get('#btn-login').click() //When user clicks on "Login Button"
})
it('make appointment', function(){
//cy.get('#combo_facility').click()
cy.get('select').select('Hongkong CURA Healthcare Center') //When user selects a value from Facility dropdown
cy.get('#chk_hospotal_readmission').click() //When user checks the checkbox
cy.get('#radio_program_medicaid').click() //when user selects "HealthCare Program"
cy.get('#txt_visit_date').click() //When user clicks on "Visit Date"
cy.get('#txt_visit_date').type('30/10/2020') //When user enters "Visit Date"
cy.get('select').select('Hongkong CURA Healthcare Center') //When user selects "Health Center"
//cy.get('#sidebar-wrapper').click()
cy.get('#txt_comment').click() //When user clicks on "Comment" text field 
cy.get('#txt_comment').type('Comment entered successfully') //When user types "Comment"
cy.get('#btn-book-appointment').click() //When user click on "Book Appointment"

})
it('appointment confirmation', function(){
cy.get('h2').contains('Appointment Confirmation') //When user checks for "Confirmation Message"

})
})
