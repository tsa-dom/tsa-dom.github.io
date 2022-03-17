import _ from 'lodash'
import React, { useState } from 'react'
import { Col, Container, FormControl } from 'react-bootstrap'
import TabBarProvider from '../TabBarProvider'
import Post from './Post'

const PostList = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const filterByTitle = _.debounce((value) => {
    setFilteredPosts(posts.filter(p => p.title.toLowerCase().includes(value.toLowerCase())))
  }, 200)

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
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              onChange={e => filterByTitle(e.target.value)}
            />
          </Col>
        </TabBarProvider>
      </Container>
    </Container>
  )
}

export default PostList