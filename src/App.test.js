import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { useSelector } from 'react-redux'; 

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('App component', () => {
  it('renders Navbar and ListPage when movieId is 0', () => {
    useSelector.mockReturnValue(0);

    const { getByTestId } = render(<App />);

    expect(getByTestId('navbar')).toBeInTheDocument();
    expect(getByTestId('list-page')).toBeInTheDocument();
    expect(queryByTestId('details')).toBeNull(); // Should not render Details component
  });

  it('renders Navbar and Details when movieId is greater than 0', () => {
    useSelector.mockReturnValue(1); // You can change this value to simulate different scenarios

    const { getByTestId } = render(<App />);
    expect(getByTestId('navbar')).toBeInTheDocument();
    expect(getByTestId('details')).toBeInTheDocument();
    expect(queryByTestId('list-page')).toBeNull(); // Should not render ListPage component
  });
});
