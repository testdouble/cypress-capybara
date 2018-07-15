/// <reference types="Cypress" />

context('Querying', () => {
  beforeEach(() => {
    cy.visit('/commands/querying')
  })

  it('cy.findButton() - see https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/Node/Finders#find_button-instance_method', () => {
    cy.findButton('Button').should('contain', 'Button')
    cy.findButton('query-btn').should('contain', 'Button')
    cy.findButton('Button "#2"').should('exist')
    cy.findButton('great button').should('contain', 'Button "#2"')
    cy.findButton('Button #3').should('have.attr', 'type', 'submit')
    cy.findButton(']a t[it]le]').should('have.attr', 'type', 'submit')
    cy.findButton('Button #4').should('have.attr', 'type', 'reset')
    cy.findButton('lol').should('have.attr', 'type', 'reset')
    cy.findButton('Button #5').should('have.attr', 'type', 'image')
    cy.findButton('an image!').should('have.attr', 'type', 'image')
    cy.findButton('Button #7').should('have.attr', 'type', 'button')
    cy.findButton('Button #6').should('not.exist')
  })

})
