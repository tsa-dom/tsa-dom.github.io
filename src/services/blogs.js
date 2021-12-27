import axios from 'axios'
import { BLOGS_URL } from '../config'

export const getBlog = async (blogName) => {
  try {
    const res = await axios.get(`${BLOGS_URL}/articles/${blogName}.md`)
    return res.data
  } catch (err) {
    return null
  }
}

export const getPage = async (pageName) => {
  try {
    const res = await axios.get(`${BLOGS_URL}/pages/${pageName}.md`)
    return res.data
  } catch (err) {
    return null
  }
}