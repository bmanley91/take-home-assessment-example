import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Initial application render', () => {
  // When the application initially renders
  render(<App />);

  // Then the expected copy is displayed
  const pageHeader = screen.getByText('User Portal');
  const codesHeader = screen.getByText('Codes');
  const categoriesHeader = screen.getByText('Categories');
  const defaultCopy = screen.getByText(/Welcome to the User Portal!/i);
  expect(pageHeader).toBeInTheDocument();
  expect(codesHeader).toBeInTheDocument();
  expect(categoriesHeader).toBeInTheDocument();
  expect(defaultCopy).toBeInTheDocument();
});
