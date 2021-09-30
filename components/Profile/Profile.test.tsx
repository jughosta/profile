import React from 'react'
import { render } from '@testing-library/react'

import Profile from './Profile'

describe('<Profile>', () => {
  it('renders successfully', () => {
    const { getByText } = render(<Profile />)
    expect(getByText(/Julia Rechkunova/i)).toBeInTheDocument()
  })
})
