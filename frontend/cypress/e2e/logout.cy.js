describe('LoginPopup Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.get('button').contains('sign in').click();

    cy.contains('Login');

    cy.get('input[name=email]').type('user.greatstack@gmail.com');
    cy.get('input[name=password]').type('12345678');

    cy.get('input[type="checkbox"]').check();

    cy.get('button[type=submit]').click();

    
    cy.get('.navbar-profile img').should('be.visible');
  });

  it('should log out the user', () => {
    
    cy.get('.navbar-profile').click();
    cy.get('.nav-profile-dropdown').invoke('show').click();
    
    
    cy.get('li').contains('Logout').click();

    
    cy.get('button').contains('sign in').should('exist');
    cy.get('.navbar-profile').should('not.exist');
  });
});
