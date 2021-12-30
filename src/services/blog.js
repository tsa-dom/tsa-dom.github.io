import axios from 'axios'
import { BLOGS_URL } from '../config'

const getField = (data, field) => {
  try {
    return data.split(`<${field}>`)[1].split(`</${field}>`)[0]
  } catch (err) {
    return undefined
  }
}

const getMeta = (meta) => {
  return {
    title: getField(meta, 'title'),
    description: getField(meta, 'description'),
    keywords: getField(meta, 'keywords'),
    author: getField(meta, 'author')
  }
}

export const getPost = async (postName) => {
  try {
    const res = await axios.get(`${BLOGS_URL}/articles/${postName}.md`)
    const data = res.data.split('--->')
    const markdown = data[1]
    const meta = getMeta(data[0])
    return {
      markdown,
      file: postName,
      meta
    }
  } catch (err) {
    return null
  }
}

export const getPage = async (pageName) => {
  try {
    const res = await axios.get(`${BLOGS_URL}/pages/${pageName}.md`)
    const data = res.data.split('--->')
    const markdown = data[1]
    const meta = getMeta(data[0])
    return {
      markdown,
      file: pageName,
      meta
    }
  } catch (err) {
    return null
  }
}

export const getConfig = async (configName) => {
  try {
    const res = await axios.get(`${BLOGS_URL}/config/${configName}.json`)
    const posts = process.env.NODE_ENV === 'development'
      ? Object(res.data)
      : Object(res.data).filter(post => !post.file.includes('test'))
    console.log(posts)
    return posts
  } catch (err) {
    return null
  }
}