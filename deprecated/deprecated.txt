import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { getPublishedText } from '../../utils/helpers'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PostList = ({ posts }) => {
  const dark = useSelector(state => state.config.dark)
  const navigate = useNavigate()

  return (
    <Row xs={1} sm={2} md={3} className="g-4 posts">
      {posts.map((post, i) => {
        return (
          <Col key={i}>
            <Card border="dark" text={dark ? 'light' : 'dark' } bg={dark ? 'dark' : 'light'}>
              <Card.Header as="h5">{post.keywords}</Card.Header>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button
                  style={{ width: 150, backgroundColor: 'rgb(45, 185, 143)' }}
                  onClick={() => navigate(`/blog/${post.file}`)}
                >Read</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{getPublishedText(post.created)}</small>
              </Card.Footer>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default PostList
