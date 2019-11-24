describe('ZipFoods', () => {
  it('Visits the homepage', () => {
    cy.visit('/')
    cy.contains('h2', 'Featured Products')
  })
})