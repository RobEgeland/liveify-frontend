import React from 'react'

const Artist = ({ artist }) => {
  return (
    <div>
        <h1>{artist.name}</h1>
        <h2>{artist.genre}</h2>
    </div>
  )
}

export default Artist