import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setDarkMode } from '../features/configSlice'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const DarkLightButton = () => {
  const dark = useSelector(state => state.config.dark)
  const exec = useDispatch()

  return (
    <>
      {dark && <BsMoonStarsFill style={{ color: 'white', marginTop: -5 }}/>}
      {!dark && <BsSunFill style={{ color: 'white', marginTop: -5 }}/>}
      <span
        className="switch"
        style={{ marginLeft: 10 }}
        onClick={() => exec(setDarkMode(!dark))}
      >
        <input
          style={{ visibility: 'hidden' }}
          checked={dark}
          type="checkbox"
          onChange={() => {}}
        />
        <div className="slider round"></div>
      </span>
    </>
  )
}

export default DarkLightButton
