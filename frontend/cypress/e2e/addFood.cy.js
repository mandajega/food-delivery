describe('FoodItem Component Tests', () => {
  beforeEach(() => {
    // Visit the page where the FoodItem is rendered
    cy.visit('http://localhost:5173'); // Adjust this URL as needed

    // Mock the StoreContext data
    cy.window().then((win) => {
      win.localStorage.setItem('token', 'mockToken');
    });
  });

  it('should render FoodItem component', () => {
    // Assuming the component is rendered on the home page
    cy.get('.food-item').should('be.visible');
  });

  it('should add item to cart', () => {
    // Click the add icon to add item to cart
    cy.get('.add[data-testid="add-icon1"]').first().click();

    // Check if the item is added to the cart
    cy.get('.food-item-counter').should('be.visible');
    cy.get('.food-item-counter p').should('contain.text', '1');
  });

  it('should increase item quantity in cart', () => {
    // Click the add icon to add item to cart
    cy.get('.add[data-testid="add-icon1"]').first().click();

    // Click the add icon again to increase the quantity
    cy.get('.food-item-counter img[data-testid="add-icon2"]').first().click();

    // Check if the item quantity is increased
    cy.get('.food-item-counter p').should('contain.text', '2');
  });

  it('should remove item from cart', () => {
    // Add item to cart first
    cy.get('.add[data-testid="add-icon1"]').first().click();

    // Click the remove icon to remove item from cart
    cy.get('.food-item-counter img[data-testid="remove-icon"]').first().click();

    // Check if the item is removed from the cart
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
