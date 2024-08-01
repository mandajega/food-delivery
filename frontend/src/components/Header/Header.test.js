import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Test to ensure the Header component renders correctly
test('renders Header component with correct content', () => {
  render(<Header />);

  // Check if the header contains the main heading
  expect(screen.getByText('Order your favourite food here')).toBeInTheDocument();
  
  // Check if the header contains the description paragraph
  expect(screen.getByText('Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and elevate your dining experience, one delicious meal at a time.')).toBeInTheDocument();
  
  // Check if the header contains the "View Menu" button
  expect(screen.getByRole('button', { name: 'View Menu' })).toBeInTheDocument();
});
