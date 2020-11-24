import React, { useContext } from 'react'
import { ArticleContext } from '../contexts/ArticleContext'

const ArticleDetails = ({ article }) => {
  const { removeArticle } = useContext(ArticleContext)
  return (
    <li onClick={() => removeArticle(article.id)}>
      <div data-testid={article.title} className='title'>
        {article.title}
      </div>
      <div className='description'>{article.description}</div>
    </li>
  )
}

export default ArticleDetails
