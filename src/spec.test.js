import React from 'react'
import { render, shallow } from 'enzyme'
import ArticleList from './components/ArticleList'
import ArticleContextProvider from './contexts/ArticleContext'

describe('ArticleList Component', () => {
  it('It should render without errors', () => {
    render(
      <ArticleContextProvider>
        <ArticleList />
      </ArticleContextProvider>
    )
  })
})
