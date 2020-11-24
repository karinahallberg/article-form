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
import NewArticleForm from '../components/NewArticleForm'

test('Integration test to make sure we can submit input value for article', async () => {
  const { getByPlaceholderText, getByTestId, debug } = render(
    <ArticleContextProvider>
      <NewArticleForm />
    </ArticleContextProvider>
  )

  const articletest = getByTestId('article-test')
  expect(articletest.innerHTML).toContain('')
  const articleTitle = getByPlaceholderText('article title')
  const submitButton = getByTestId('submit-button')
  fireEvent.click(submitButton)

  waitFor()

  fireEvent.change(articleTitle, { target: { value: 'Masterpiece' } })
  fireEvent.click(submitButton)
  waitFor(() => expect(articletest.innerHTML).toContain('value="Masterpiece"'))

  debug()
})
