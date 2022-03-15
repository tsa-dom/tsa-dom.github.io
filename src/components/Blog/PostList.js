/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Col, Container, FormControl, InputGroup } from 'react-bootstrap'
import { navScrollEvent } from '../../utils/helpers'
import TabBarProvider from '../TabBarProvider'
import Post from './Post'

const PostList = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const filterByTitle = (value) => {
    setFilteredPosts(posts.filter(p => p.title.toLowerCase().includes(value.toLowerCase())))
  }

  useEffect(navScrollEvent)

  return (
    <Container className='separator'>
      <Container className='page'>
        <h2 style={{ marginBottom: 25 }}>All blog posts</h2>
        <div style={{ marginTop: 10 }}>
          {filteredPosts.map((post, i) => <Post key={i} post={post} />)}
        </div>
        {!filteredPosts.length && <div>No posts found...</div>}
      </Container>
      <Container className='tab'>
        <TabBarProvider>
          <Col style={{ width: 255, marginLeft: 10 }}>
            <h3>Search</h3>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={e => filterByTitle(e.target.value)}
              />
            </InputGroup>
          </Col>
        </TabBarProvider>
      </Container>
    </Container>
  )
}

export default PostList