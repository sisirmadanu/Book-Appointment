describe('Demo Site',function(){
it('Visit Link',function(){
cy.visit('http://demo.automationtesting.in/')

})
it('Register',function(){
cy.get('#email').type('madanusisir1.ms@gmail.com')
cy.get('#enterimg').click()
})
it('Enter Details', function(){
cy.get('[placeholder="First Name"]').type('First Name')
cy.get('[placeholder="Last Name"]').type('Last Name')
cy.get('[ng-model="Adress"]').type('Europe')
cy.get('[ng-model="EmailAdress"]').type('test@gmail.com')
cy.get('[ng-model="Phone"]').type('0123456789')
cy.get('input[type=radio]').check(['Male'])
cy.get('#checkbox1').check()
cy.get('#checkbox2').check()
cy.get('#checkbox3').check()
})
it('Language Dropdown selection',function(){
cy.get('#msdd').click()
cy.get('.ui-corner-all').contains('English').click()
cy.get('.ui-corner-all').contains('German').click()
})
it('Skills Dropdown Selection',function(){
cy.get('#basicBootstrapForm').click()
cy.get('#Skills').select('Android').should('have.value','Android')
})
it('Country Drop Down Selection',function(){
cy.get('#basicBootstrapForm').click()
cy.get('#countries').select('Belgium').should('have.value','Belgium')

})
it('Select Country',function(){
    cy.get('[role="combobox"]').click()
    cy.get('.select2-search__field').type('Denm')
    cy.get('.select2-search__field').type('{enter}')
})
it('Date of Birth',function(){
cy.get('#yearbox').select('1990').should('have.value','1990')
cy.get('[placeholder="Month"]').select('January').should('have.value','January')
cy.get('#daybox').select('5').should('have.value','5')
})
it('Password',function(){
    cy.get('#firstpassword').click()
    cy.get('#firstpassword').type('!@#$1234Qwerty')
    cy.get('#secondpassword').click()
    cy.get('#secondpassword').type('!@#$1234Qwerty')
})
it('Click Submit',function(){
cy.get('#submitbtn').click()

})

})