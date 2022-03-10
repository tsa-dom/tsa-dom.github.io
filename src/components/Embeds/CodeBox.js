import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBox = ({ md }) => {
  const lang = md.split('\n')[0]
  const code = md.substr(lang.length + 1, md.length - 5)

  const langs = {
    jsx: 'jsx',
    css: 'css'
  }

  return (
    <SyntaxHighlighter
      language={langs[lang]}
      style={vscDarkPlus}
      wrapLines={true}
      //lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
    >{code}</SyntaxHighlighter>
  )
}

export default CodeBox
