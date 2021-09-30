import React from 'react'
import { render } from '@testing-library/react'

import SocialLinks from './SocialLinks'
import SocialLink from '../SocialLink/SocialLink'

describe('<SocialLinks>', () => {
  it('renders successfully', () => {
    const { getByAltText } = render(
      <SocialLinks>
        <SocialLink
          name="Github"
          url="https://example.com"
          icon={{ src: 'https://example.com/icon.png' }}
        />
        <SocialLink
          name="Codepen"
          url="https://example.com"
          icon={{ src: 'https://example.com/icon.png' }}
        />
      </SocialLinks>
    )
    expect(getByAltText(/Github/i)).toBeInTheDocument()
    expect(getByAltText(/Codepen/i)).toBeInTheDocument()
  })
})
