import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import ArticleContextProvider from '../contexts/ArticleContext'

test('Render Navbar so it doesnt crash', () => {
  render(<ArticleContextProvider />)
})
