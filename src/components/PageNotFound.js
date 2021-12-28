import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  const handleToMainPage = () => {
    navigate('/')
  }

  return (
    <div style={{ textAlign: 'center', marginTop: window.innerHeight / 4 }}>
      <h1>... Ooops ...</h1>
      <h2>404 - Page Not Found</h2>
      <Button
        style={{ marginTop: 20, backgroundColor: 'lightblue', color: 'black', fontSize: 20 }}
        onClick={handleToMainPage}
      >
        Back to main page
      </Button>
    </div>
  )
}

export default PageNotFound