import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

const MainPage = () => {

  return (
    <Container className='page'>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Main page for tsadom's blog platform" />
      </Helmet>
      <h1>This is an awesome mainpage</h1>
    </Container>
  )
}

export default MainPage