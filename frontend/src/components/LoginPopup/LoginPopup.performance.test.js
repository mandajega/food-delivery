import React from 'react';
import { render } from '@testing-library/react';
import { performanceTest } from 'react-performance-testing';
import LoginPopup from './LoginPopup';
import { StoreContext } from '../../context/StoreContext';

describe('LoginPopup Component Performance Test', () => {
  const setShowLogin = jest.fn();
  const setToken = jest.fn();
  const mockUrl = 'http://mockurl.com';

  performanceTest('renders LoginPopup component', () => {
    render(
      <StoreContext.Provider value={{ url: mockUrl, setToken }}>
        <LoginPopup setShowLogin={setShowLogin} />
      </StoreContext.Provider>
    );
  });
});
