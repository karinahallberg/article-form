//Here we will cycle through the article data and output a single ArticleDetail component for each article
import React, { useContext } from 'react'
import ArticleDetails from './ArticleDetails'
import { ArticleContext } from '../contexts/ArticleContext'

const ArticleList = () => {
  const { articles } = useContext(ArticleContext)
  return articles.length ? (
    <div className='article-list'>
      <ul>
        {articles.map((article) => {
          return <ArticleDetails article={article} key={article.id} />
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'>No articles created. Lets create some!</div>
  )
}

export default ArticleList
