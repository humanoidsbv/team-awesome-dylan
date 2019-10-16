describe('My First Test', function() {
  it('finds the content "type"', function() {
    cy.visit('http://localhost:8000/')

    cy.contains('Time Entries')

    cy.get('#activity')
      .type('fake activity')
      .should('have.value', 'fake activity')
  })
})