import React from 'react';
import { render } from '@testing-library/react';
import SocialLink from './SocialLink';

test('renders successfully', () => {
  const { getByAltText } = render(
    <SocialLink
      name="Github"
      url="https://example.com"
      icon="https://example.com/icon.png"
    />
  );
  const imgElement = getByAltText(/Github/i);
  expect(imgElement).toBeInTheDocument();
});
