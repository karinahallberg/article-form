import React from 'react'
import Navbar from './components/Navbar'
import ArticleContextProvider from './contexts/ArticleContext'
import ArticleList from './components/ArticleList'
import NewArticleForm from './components/NewArticleForm'

function Main() {
  return (
    <ArticleContextProvider>
      <Navbar />
      <ArticleList />
      <NewArticleForm />
    </ArticleContextProvider>
  )
}

export default Main
