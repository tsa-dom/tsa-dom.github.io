import React from 'react'
import { Container } from 'react-bootstrap'
import Helmet from '../Embeds/Helmet'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import CodeBox from '../Embeds/CodeBox'
import TextBox from '../Embeds/TextBox'

// A foundation for each page
const PageView = ({ page, config, path }) => {

  return (
    <Container className='separator'>
      <Helmet meta={page.meta} />
      <Container className='page'>
        <MobileNavigation
          activeKey={page.file}
          config={config}
          path={path}
        />
        <hr className="mobile" />
        {page.markdown.split('```').map((md, i) => i % 2
          ? <CodeBox key={i} md={md} />
          : <TextBox key={i} md={md} />
        )}
      </Container>
      <Container className='tab'>
        <Navigation
          activeKey={page.file}
          config={config}
          path={path}
        />
      </Container>
    </Container>
  )
}

export default PageView
