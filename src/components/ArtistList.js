import React from 'react'
import { useState, useEffect } from 'react'
import Artist from './Artist'

const ArtistList = () => {
    const [artists, setArtist] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/artists')
        .then((res) => res.json)
        .then((data) => console.log(data))
    }, [])

    const artistcards = artists.map((artist, index) => <Artist key={index} artist={artist}/>)

  return (
    <ul>
        <li>{artistcards}</li>
    </ul>
  )
}

export default ArtistList