import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

test('Render Navbar so it doesnt crash', () => {
  render(<Navbar />)
})
