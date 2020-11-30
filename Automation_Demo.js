describe('Demo Site',function(){
it('Visit Link',function(){
cy.visit('http://demo.automationtesting.in/') //When user visit page.

})
it('Register',function(){
cy.get('#email').type('madanusisir1.ms@gmail.com') //When user Enters "Email".
cy.get('#enterimg').click() //When user clicks next.
})
it('Enter Details', function(){
cy.get('[placeholder="First Name"]').type('First Name') //When user enters "First Name"
cy.get('[placeholder="Last Name"]').type('Last Name') //When user enters "Last Name"
cy.get('[ng-model="Adress"]').type('Europe') //When user enters "Address"
cy.get('[ng-model="EmailAdress"]').type('test@gmail.com') //When user enters "Email Address"
cy.get('[ng-model="Phone"]').type('0123456789') //When user enters "Phone Number"
cy.get('input[type=radio]').check(['Male']) //When user selects "Gender"
cy.get('#checkbox1').check() //When user selects "Hobbies" (Multiple Select Option)
cy.get('#checkbox2').check() //When user selects "Hobbies" 
cy.get('#checkbox3').check() //When user selects "Hobbies"
})
it('Language Dropdown selection',function(){
cy.get('#msdd').click() //When user clicks on "Language" dropdown
cy.get('.ui-corner-all').contains('English').click() //When user selects "Language"
cy.get('.ui-corner-all').contains('German').click()  //When user selects "Language"
})
it('Skills Dropdown Selection',function(){
cy.get('#basicBootstrapForm').click() //When user clicks on "Skills" dropdown
cy.get('#Skills').select('Android').should('have.value','Android') //When user selects "skills"
})
it('Country Drop Down Selection',function(){
cy.get('#basicBootstrapForm').click() //When user clicks on "Country" drop down
cy.get('#countries').select('Belgium').should('have.value','Belgium') //When user selects "Country"

})
it('Select Country',function(){
    cy.get('[role="combobox"]').click() //When user clicks on "Country" text field 
    cy.get('.select2-search__field').type('Denm') //When user enters "Den" to search and select "Denmark"
    cy.get('.select2-search__field').type('{enter}') //When user clicks "Enter" after search
})
it('Date of Birth',function(){
cy.get('#yearbox').select('1990').should('have.value','1990') //When user selects "Year"
cy.get('[placeholder="Month"]').select('January').should('have.value','January') //When user selects "January"
cy.get('#daybox').select('5').should('have.value','5') //When use selects "Day"
})
it('Password',function(){
    cy.get('#firstpassword').click() //When user clicks on "FirstPassword"
    cy.get('#firstpassword').type('!@#$1234Qwerty') //When user enters "First Password"
    cy.get('#secondpassword').click() //When user clicks on "Second Password"
    cy.get('#secondpassword').type('!@#$1234Qwerty') //When user enters "Second Password"
})
it('Click Submit',function(){
cy.get('#submitbtn').click() //When user clicks on "Submit Button"

})

})
