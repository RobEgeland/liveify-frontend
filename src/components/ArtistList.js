import React from 'react'
import { useState, useEffect } from 'react'
import Artist from './Artist'

const ArtistList = () => {
    const [artists, setArtists] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:9292/artists")
        .then((res) => res.json())
        .then((res) => {
          setLoading(false)
          setArtists(res)
        })
    }, [])

    const artistcards = artists.map((artist, index) => <Artist key={index} artist={artist} />)
    if (loading) {
      <h1>Loading...</h1>
    }else {
      return (
    <ul>
        <p>{artistcards}</p>
    </ul>
  )
    }
  
}

export default ArtistList