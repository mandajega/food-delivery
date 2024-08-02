describe('FoodItem Component Tests', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:5173'); 

    
    cy.window().then((win) => {
      win.localStorage.setItem('token', 'mockToken');
    });
  });

  it('should render FoodItem component', () => {
    
    cy.get('.food-item').should('be.visible');
  });

  it('should add item to cart', () => {
    
    cy.get('.add[data-testid="add-icon1"]').first().click();

    
    cy.get('.food-item-counter').should('be.visible');
    cy.get('.food-item-counter p').should('contain.text', '1');
  });

  it('should increase item quantity in cart', () => {
    
    cy.get('.add[data-testid="add-icon1"]').first().click();

    
    cy.get('.food-item-counter img[data-testid="add-icon2"]').first().click();

    
    cy.get('.food-item-counter p').should('contain.text', '2');
  });

  it('should remove item from cart', () => {
    
    cy.get('.add[data-testid="add-icon1"]').first().click();

    
    cy.get('.food-item-counter img[data-testid="remove-icon"]').first().click();

    
    cy.get('.add[data-testid="add-icon1"]').should('be.visible');
  });

  it('should display added items in cart details', () => {
    cy.get('.food-item').first().within(() => {
      cy.get('.food-item-name-rating p').first().invoke('text').as('itemName');
      cy.get('.add[data-testid="add-icon1"]').should('be.visible').click();
    });

    cy.get('.navbar-search-icon a[href="/cart"]').should('be.visible').click();
    cy.url().should('include', '/cart');

    
      cy.get(`[data-testid="item-name"]`).should('be.visible');
    
  });
});
