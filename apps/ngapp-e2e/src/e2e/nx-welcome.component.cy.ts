describe('ngapp', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('maints-nx-welcome').should('exist');
  });
});
