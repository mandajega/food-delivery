import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPopup from './LoginPopup';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';


jest.mock('axios');



describe('LoginPopup Component', () => {
  const setShowLogin = jest.fn();
  const setToken = jest.fn();
  const mockUrl = 'http://mockurl.com';
  
  beforeEach(() => {
    render(
      <StoreContext.Provider value={{ url: mockUrl, setToken }}>
        <LoginPopup setShowLogin={setShowLogin} />
      </StoreContext.Provider>
    );
  });

  test('renders login form with inputs and buttons', () => {
    expect(screen.getByPlaceholderText(/Your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('changes to signup form when "Sign Up" is clicked', () => {
    fireEvent.click(screen.getByText(/Click here/i));
    
    expect(screen.getByPlaceholderText(/Your name/i)).toBeInTheDocument();
    expect(screen.getByText(/Create account/i)).toBeInTheDocument();
  });

  test('submits the form data for login', async () => {
    axios.post.mockResolvedValueOnce({
      data: { success: true, token: 'mockToken' }
    });
  
    
    screen.debug();
  
    
    fireEvent.change(screen.getByPlaceholderText(/Your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'password123' } });
    
    
    const loginButton = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(loginButton);

    
  });
  
    
    test('shows alert on failed login attempt', async () => {
        window.alert = jest.fn(); 
        axios.post.mockResolvedValueOnce({
          data: { success: false, message: 'Login failed' }
        });
    
        fireEvent.change(screen.getByPlaceholderText(/Your email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'wrongpassword' } });
        
        fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    
       
      });
  
    
  
  
  
})