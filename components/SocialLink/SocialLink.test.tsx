import React from 'react'
import { render } from '@testing-library/react'

import SocialLink from './SocialLink'

describe('<ProfileImage>', () => {
  it('renders successfully', () => {
    const { getByAltText } = render(
      <SocialLink
        name="Github"
        url="https://example.com"
        icon={{ src: 'https://example.com/icon.png' }}
      />
    )
    expect(getByAltText(/Github/i)).toBeInTheDocument()
  })
})
