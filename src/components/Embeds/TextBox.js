import React from 'react'
import { isValidUrl, textAndTypes } from '../../utils/helpers'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import YouTube from './YouTube'

const TextBox = ({ md }) => {
  const elements = textAndTypes(md)
  return elements.map((e, j) => {
    switch (e.type) {
      case 'youtube':
        return <YouTube key={j} id={e.value} />
      case 'image':
        if (isValidUrl(e.value)) {
          return <img style={{ width: '100%' }} key={j} src={e.value} />
        }
        break
      default:
        return <ReactMarkdown
          key={j}
          remarkPlugins={[remarkGfm]}
        >
          {e.value}
        </ReactMarkdown>
    }
  })
}

export default TextBox
