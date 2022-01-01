import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getConfig } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { setConfig } from '../features/blogSlice'

const Blog = () => {
  const config = useSelector(state => state.blog.config)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(async () => {
    if (!config) {
      const conf = await getConfig('blog')
      dispatch(setConfig(conf))
    }
  }, [])

  if (!config) return <></>

  return (
    <Container className='page-card'>
      <h4 style={{ marginBottom: 20 }}>All blog posts</h4>
      <Row xs={1} md={3} className="g-4">
        {[...config]
          .sort((a, b) => new Date(b.created) - new Date(a.created))
          .map((blog, i) => {
            const diffTime = Math.abs(new Date() - new Date(blog.created))
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) - 1)
            const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30) - 1)
            const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365) - 1)
            const publishText = diffDays === 0
              ? 'Published today'
              : diffDays < 30
                ? `Published ${diffDays} days ago`
                : diffMonths < 12
                  ? `Published ${diffMonths} months ago`
                  : `Published ${diffYears} years ago`
            return (
              <Col key={i}>
                <Card border="dark">
                  <Card.Header as="h5">{blog.keywords}</Card.Header>
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.description}</Card.Text>
                    <Button
                      style={{ width: 150, backgroundColor: 'rgb(45, 185, 143)' }}
                      onClick={() => navigate(`/blog/${blog.file}`)}
                    >Read</Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{publishText}</small>
                  </Card.Footer>
                </Card>
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}

export default Blog