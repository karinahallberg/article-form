import React, { useContext } from 'react'
import { ArticleContext } from '../contexts/ArticleContext'

const Navbar = () => {
  const { articles } = useContext(ArticleContext)
  return (
    <div className='navbar'>
      <h1>Article List Board</h1>
      <p>Currently you have {articles.length} articles posted.</p>
    </div>
  )
}

export default Navbar
