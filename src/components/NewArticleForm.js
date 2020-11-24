import React, { useContext, useState } from 'react'
import { ArticleContext } from '../contexts/ArticleContext'

const NewArticleForm = () => {
  const { addArticle } = useContext(ArticleContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('title, description')
    addArticle(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='article title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        data-testid='article-test'
      />
      <input
        type='text'
        placeholder='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input data-testid='submit-button' type='submit' value='add article' />
    </form>
  )
}

export default NewArticleForm
