import React from 'react';
import { render } from '@testing-library/react';
import ProfileImage from './ProfileImage';

test('renders successfully', () => {
  const { getByAltText } = render(<ProfileImage />);
  const imgElement = getByAltText(/@jughosta/i);
  expect(imgElement).toBeInTheDocument();
});
