import React from 'react'

const YouTube = ({ id }) => {

  return (
    <div className='video-responsive'>
      <iframe
        className='youtube'
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  )
}

export default YouTube