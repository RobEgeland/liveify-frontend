import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const ArtistDetails = () => {
    const [artist, setArtist] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/artists/${id}`)
        .then(res => res.json())
        .then(data => setArtist(data))
    }, [])

  return (
    <div>
        <h2>{artist.name}</h2> 
        <p>{artist.genre}</p>
    </div>
  )
}

export default ArtistDetails