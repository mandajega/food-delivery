import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExploreMenu from './ExploreMenu';
import { menu_list } from '../../assets/assets';

describe('ExploreMenu Component', () => {
  const mockSetCategory = jest.fn();
  const defaultProps = {
    category: 'All',
    setCategory: mockSetCategory,
  };

  const renderComponent = (props = defaultProps) => {
    const { asFragment } = render(<ExploreMenu {...props} />);
    return asFragment;
  };

  beforeEach(() => {
    mockSetCategory.mockClear();
  });

  test('renders the component with menu items', () => {
    const asFragment = renderComponent();
    expect(screen.getByText('Explore our menu')).toBeInTheDocument();
    expect(screen.getByText(/Choose from a diverse menu/i)).toBeInTheDocument();

    menu_list.forEach(item => {
      expect(screen.getByAltText(item.menu_name)).toBeInTheDocument();
      expect(screen.getByText(item.menu_name)).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test('calls setCategory with correct arguments when a menu item is clicked', () => {
    renderComponent();
    const firstMenuItem = menu_list[0];
    fireEvent.click(screen.getByText(firstMenuItem.menu_name));

    expect(mockSetCategory).toHaveBeenCalledWith(expect.any(Function));

    const setCategoryMockImplementation = fn => {
      const newCategory = fn(defaultProps.category);
      expect(newCategory).toBe(firstMenuItem.menu_name);
    };

    expect(mockSetCategory.mock.calls[0][0]).toEqual(expect.any(Function));
    mockSetCategory.mock.calls[0][0](setCategoryMockImplementation);
  });

  test('applies active class to the selected category', () => {
    const props = {
      category: menu_list[0].menu_name,
      setCategory: mockSetCategory,
    };

    const asFragment = renderComponent(props);
    const activeImage = screen.getByAltText(menu_list[0].menu_name);
    expect(activeImage).toHaveClass('active');

    expect(asFragment()).toMatchSnapshot();
  });

  test('removes active class when clicking the same category (toggles to "All")', () => {
    const props = {
      category: menu_list[0].menu_name,
      setCategory: mockSetCategory,
    };

    const asFragment = renderComponent(props);
    fireEvent.click(screen.getByText(menu_list[0].menu_name));

    expect(mockSetCategory).toHaveBeenCalledWith(expect.any(Function));

    const setCategoryMockImplementation = fn => {
      const newCategory = fn(props.category);
      expect(newCategory).toBe('All');
    };

    mockSetCategory.mock.calls[0][0](setCategoryMockImplementation);

    expect(asFragment()).toMatchSnapshot();
  });
});
