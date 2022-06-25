import React from 'react'
import { useState, useEffect } from 'react'
import Artist from './Artist'

const ArtistList = () => {
    const [artists, setArtist] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/artists')
        .then(res => res.json)
        .then(res => console.log(res))
    }, [])

  return (
    <h1>{artists.map(artist => <Artist artist={artist}/>)}</h1>
  )
}

export default ArtistList