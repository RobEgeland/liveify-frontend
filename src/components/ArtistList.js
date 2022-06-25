import React from 'react'
import { useState, useEffect } from 'react'
import Artist from './Artist'

const ArtistList = () => {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/artists")
        .then((res) => res.json())
        .then((res) => setArtists(res))
    }, [])

    const artistcards = artists.map((artist, index) => <Artist key={index} artist={artist}/>)

  return (
    <ul>
        <p>{artistcards}</p>
    </ul>
  )
}

export default ArtistList