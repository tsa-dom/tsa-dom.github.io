import React from 'react'
import { Helmet as AsyncHelmet } from 'react-helmet-async'

const Helmet = ({ meta }) => {
  const { title, description, keywords, author } = meta

  return (
    <AsyncHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : undefined}
      {author ? <meta name="author" content={author} /> : undefined}
    </AsyncHelmet>
  )
}

export default Helmet
