import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {
  const [articles, setArticles] = useState([
    {
      title: 'Learning React',
      description: 'Beginners guide how to build a portfolio',
      id: uuid(),
    },
    {
      title: 'Infrastructure As Code',
      description: 'Understanding Terraform',
      id: uuid(),
    },
  ])
  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles))
  }, [articles])
  const addArticle = (title, description) => {
    setArticles([...articles, { title, description, id: uuid() }])
  }
  const removeArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id))
  }

  return (
    <ArticleContext.Provider value={{ articles, addArticle, removeArticle }}>
      {props.children}
    </ArticleContext.Provider>
  )
}

export default ArticleContextProvider
