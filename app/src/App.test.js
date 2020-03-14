import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders search filter', () => {
  const { getByPlaceholderText } = render(<App />);
  const filterElement = getByPlaceholderText(
    /Start typing to filter.../i,
  );
  expect(filterElement).toBeInTheDocument();
});
