describe('LoginPopup Component Tests', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:5173/');
  
      
      cy.get('button').contains('sign in').click();
  
    });
  
    it('new account should be created successfully', () => {
    
      cy.contains('Create a new account?');

      cy.get('span').contains('Click here').click();
  
      cy.get('input[name=name]').type('Someone');
      cy.get('input[name=email]').type('hi@gmail.com');
      cy.get('input[name=password]').type('pass1234');
      
  
      cy.get('input[type="checkbox"]').check(); 
  
      cy.get('button[type=submit]').click();
  
    });
  })