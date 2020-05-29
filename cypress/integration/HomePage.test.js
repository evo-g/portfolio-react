describe('HomePage test', () => {
  it('Visit the app and render <HomePage />', () => {
    cy.visit('/');
    cy.get('.item');
    cy.get('.item-in');
  });
});
