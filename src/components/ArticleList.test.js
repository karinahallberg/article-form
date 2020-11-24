// __tests__/fetch.test.js
import React from 'react'
import ArticleContextProvider from '../contexts/ArticleContext'
import {
  render,
  fireEvent,
  waitFor,
  screen,
  waitForDomChange,
} from '@testing-library/react'
import ArticleList from '../components/ArticleList'

test('make sure we can submit an article', async () => {
  const { getByPlaceholderText, getByTestId, getByText, debug } = render(
    <ArticleContextProvider>
      <ArticleList />
    </ArticleContextProvider>
  )

  const articledetail1 = getByTestId('Learning React')
  const articledetail2 = getByTestId('Infrastructure As Code')
  expect(articledetail1.innerHTML).toContain('Learning React')
  expect(articledetail2.innerHTML).toContain('Infrastructure As Code')
  debug()
})
