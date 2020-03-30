import React from 'react';
import { render } from '@testing-library/react';
import SocialLinks from './SocialLinks';
import SocialLink from '../SocialLink/SocialLink';

test('renders successfully', () => {
  const { getByAltText } = render(
    <SocialLinks>
      <SocialLink
        name="Github"
        url="https://example.com"
        icon="https://example.com/icon.png"
      ></SocialLink>
      <SocialLink
        name="Codepen"
        url="https://example.com"
        icon="https://example.com/icon.png"
      ></SocialLink>
    </SocialLinks>
  );
  const imgElement1 = getByAltText(/Github/i);
  expect(imgElement1).toBeInTheDocument();
  const imgElement2 = getByAltText(/Codepen/i);
  expect(imgElement2).toBeInTheDocument();
});
