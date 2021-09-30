import React from 'react'
import { render } from '@testing-library/react'

import ProfileImage from './ProfileImage'

describe('<ProfileImage>', () => {
  it('renders successfully', () => {
    const { getByAltText } = render(<ProfileImage />)
    expect(getByAltText(/@jughosta/i)).toBeInTheDocument()
  })
})
