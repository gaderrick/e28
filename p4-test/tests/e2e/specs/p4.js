// https://docs.cypress.io/api/introduction/api.html

describe('p4', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('p', 'GoodJoke website a website for joke research.')
  })
  it('shows all the products', () => {

    cy.visit('/jokes')

    cy.contains('h2', 'Jokes')
    cy.contains('[data-test="product-name"]', 'Joke about dreams')
    cy.get('[data-test="product-name"]').should('have.length', 10)

    cy.get('[data-test="product-name"]').first().click();
    cy.contains('[data-test="product-name"]', 'Joke about dreams')

  })
  it('interacts with cart', () => {
    cy.visit('/joke/1');
    cy.get('[data-test="add-to-cart-button"]').click();
    cy.contains('[data-test="cart-count"]', 1);
    cy.visit('/cart');
    cy.contains('[data-test="cart-contents"]', '1 x ' + 'Joke about dreams');
    cy.get('[data-test="remove-from-cart-button"]').click();
    cy.contains('[data-test="cart-count"]', 0);
    cy.contains('No items');
  })

  it('shows the categories page', () => {
    cy.visit('/categories');
    cy.contains('[data-test="category-name"]', 'funny');
    cy.get('[data-test="category-name"]').should('have.length', 1);
  })
})
