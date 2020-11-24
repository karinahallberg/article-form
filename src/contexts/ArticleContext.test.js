import { render, screen } from '@testing-library/react'
import ArticleContext from './ArticleContext'

test('Render ArticleContext so it doesnt crash', () => {
  render(<ArticleContext />)
})
