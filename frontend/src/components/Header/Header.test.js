import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';


test('renders Header component with correct content', () => {
  render(<Header />);

  
  expect(screen.getByText('Order your favourite food here')).toBeInTheDocument();
  
  
  expect(screen.getByText('Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and elevate your dining experience, one delicious meal at a time.')).toBeInTheDocument();
  
  
  expect(screen.getByRole('button', { name: 'View Menu' })).toBeInTheDocument();
});
