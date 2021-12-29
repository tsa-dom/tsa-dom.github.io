import axios from 'axios'
import { BLOGS_URL } from '../config'

export const getBlog = async (blogName) => {
  try {
    const res = await axios.get(`${BLOGS_URL}/articles/${blogName}.md`)
    const parsedData = res.data.split('--->')[1]
    return parsedData
  } catch (err) {
    return null
  }
}

export const getPage = async (pageName) => {
  try {
    const res = await axios.get(`${BLOGS_URL}/pages/${pageName}.md`)
    const parsedData = res.data.split('--->')[1]
    return parsedData
  } catch (err) {
    return null
  }
}

export const getConfig = async (configName) => {
  try {
    const res = await axios.get(`${BLOGS_URL}/config/${configName}.json`)
    return Object(res.data)
  } catch (err) {
    return null
  }
}