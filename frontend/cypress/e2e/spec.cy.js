describe('LoginPopup Component Tests', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:5173/');

    
    cy.get('button').contains('sign in').click();

  });

  it('should login successfully', () => {
  
    cy.contains('Login');

    
    cy.get('input[name=email]').type('user.greatstack@gmail.com');
    cy.get('input[name=password]').type('12345678');
    

    cy.get('input[type="checkbox"]').check(); 

    cy.get('button[type=submit]').click();

  });
})