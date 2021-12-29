import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getConfig } from '../services/blogs'

const Blogs = () => {
  const [config, setConfig] = useState()
  const navigate = useNavigate()

  useEffect(async () => {
    const config = await getConfig('blogs')
    setConfig(config)
  }, [])

  if (!config) return <></>

  return (
    <Container className='page'>
      <h4 style={{ marginBottom: 20 }}>All blog posts</h4>
      <Row xs={1} md={3} className="g-4">
        {config.map((blog, i) => {
          return (
            <Col key={i}>
              <Card border="dark">
                <Card.Header as="h5">{blog.keywords}</Card.Header>
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                  <Button
                    style={{ width: 150, backgroundColor: 'rgb(45, 185, 143)' }}
                    onClick={() => navigate(`/blogs/${blog.file}`)}
                  >Read</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Blogs