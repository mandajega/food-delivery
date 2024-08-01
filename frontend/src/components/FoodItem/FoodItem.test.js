import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodItem from './FoodItem';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const mockAddToCart = jest.fn();
const mockRemoveFromCart = jest.fn();

const mockContextValue = {
  cartItems: {},
  addToCart: mockAddToCart,
  removeFromCart: mockRemoveFromCart,
  url: 'http://mockurl.com',
};

describe('FoodItem Component', () => {
  const defaultProps = {
    id: '1',
    name: 'Test Food',
    price: 10,
    description: 'Test Description',
    image: 'test-image-url',
  };

  const renderComponent = (contextValue = mockContextValue, props = defaultProps) => {
    render(
      <StoreContext.Provider value={contextValue}>
        <FoodItem {...props} />
      </StoreContext.Provider>
    );
  };

  test('renders food item with correct information', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByText(`$${defaultProps.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(defaultProps.name)).toHaveAttribute('src', defaultProps.image);
  });

  test('renders add to cart button when item is not in the cart', () => {
    renderComponent();
    expect(screen.getByTestId('add-icon1')).toBeInTheDocument();

  });

  test('calls addToCart function when add button is clicked', () => {
    renderComponent();
    fireEvent.click(screen.getByTestId('add-icon1'));
    expect(mockAddToCart).toHaveBeenCalledWith(defaultProps.id);
  });

  test('renders counter when item is in the cart', () => {
    const cartContextValue = {
      ...mockContextValue,
      cartItems: { '1': 2 },
    };
    renderComponent(cartContextValue);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByTestId('remove-icon')).toBeInTheDocument();
    expect(screen.getByTestId('add-icon2')).toBeInTheDocument();
  });

  test('calls removeFromCart function when remove button is clicked', () => {
    const cartContextValue = {
      ...mockContextValue,
      cartItems: { '1': 2 },
    };
    renderComponent(cartContextValue);
    fireEvent.click(screen.getByTestId('remove-icon'));
    expect(mockRemoveFromCart).toHaveBeenCalledWith(defaultProps.id);
  });

  test('calls addToCart function when add button is clicked in counter', () => {
    const cartContextValue = {
      ...mockContextValue,
      cartItems: { '1': 2 },
    };
    renderComponent(cartContextValue);
    fireEvent.click(screen.getByTestId('add-icon2'));
    expect(mockAddToCart).toHaveBeenCalledWith(defaultProps.id);
  });
  


});