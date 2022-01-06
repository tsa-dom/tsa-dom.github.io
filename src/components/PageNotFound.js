import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styles } from '../styles/styles'

const PageNotFound = () => {
  const navigate = useNavigate()
  const dark = useSelector(state => state.config.dark)

  const handleToMainPage = () => {
    navigate('/')
  }

  return (
    <div style={{
      textAlign: 'center',
      marginTop: window.innerHeight / 6,
      color: dark ? styles.white : styles.black
    }}>
      <h3>... Ooops ...</h3>
      <h4>404 - Page Not Found</h4>
      <div>Seems like requested url:</div>
      <div><em>{window.location.href}</em></div>
      <div>does not exist...</div>
      <Button
        style={{ marginTop: 20, backgroundColor: 'rgb(45, 185, 143)', color: 'black', fontSize: 16 }}
        onClick={handleToMainPage}
      >
        Back to main page
      </Button>
    </div>
  )
}

export default PageNotFound