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
    // Open the profile dropdown
    cy.get('.navbar-profile').click();
    cy.get('.nav-profile-dropdown').invoke('show').click();
    
    // Click on the Logout button
    cy.get('li').contains('Logout').click();

    // Verify the user is logged out
    cy.get('button').contains('sign in').should('exist');
    cy.get('.navbar-profile').should('not.exist');
  });
});
