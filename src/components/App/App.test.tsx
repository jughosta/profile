import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders successfully', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/Julia Rechkunova/i);
  expect(h1Element).toBeInTheDocument();
});
