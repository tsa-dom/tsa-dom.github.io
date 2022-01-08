import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPublishedText } from '../utils/helpers'

const PostListMobile = ({ posts }) => {
  const dark = useSelector(state => state.config.dark)
  const navigate = useNavigate()

  return (
    <Accordion className='posts-mobile'>
      {posts.map((post, i) => {
        return (
          <Accordion.Item className="accordion-item" key={i} eventKey={i}>
            <Accordion.Header>{post.title}</Accordion.Header>
            <Accordion.Body >
              <Card style={{ marginTop: -10, borderStyle: 'none' }} border="light" text={dark ? 'light' : 'dark' } bg={dark ? 'dark' : 'light'}>
                <Card.Body>
                  <Card.Text>{post.description}</Card.Text>
                  <Button
                    style={{ width: 200, backgroundColor: 'rgb(45, 185, 143)' }}
                    onClick={() => navigate(`/blog/${post.file}`)}
                  >Read</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{getPublishedText(post.created)}</small>
                </Card.Footer>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        )
      })
      }
    </Accordion>
  )
}

export default PostListMobile
