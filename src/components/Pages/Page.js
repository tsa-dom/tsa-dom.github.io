import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPage } from '../../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { addPage } from '../../features/pageSlice'
import { getConfig } from '../../services/blog'
import { setPages, setGroups } from '../../features/configSlice'
import PageNotFound from '../PageNotFound'
import { navScrollEvent } from '../../utils/helpers'
import PageView from './PageView'

const Page = ({ main }) => {
  const params = useParams()
  const file = main ? 'main' : params['page']
  const page = useSelector(state => state.pages.entries.find(p => p.file === file))
  const config = useSelector(state => {
    const conf = state.config
    return conf?.groups?.[conf?.pages.find(c => c.file === file)?.group]
  })
  const exec = useDispatch()
  const [pageNotFound, setPageNotFound] = useState(false)

  useEffect(navScrollEvent)

  useEffect(async () => {
    setPageNotFound(false)
    !config && exec(setPages(await getConfig('pages')))
    !config && exec(setGroups(await getConfig('groups')))
    if (!page) {
      const source = await getPage(file)
      source ? exec(addPage(source)) : setPageNotFound(true)
    }
  }, [window.location.href])

  if(pageNotFound) return <PageNotFound />

  if (!page) return <></>

  return (
    <PageView page={page} path='pages' config={config} />
  )
}

export default Page