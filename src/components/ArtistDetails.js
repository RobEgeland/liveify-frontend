import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const ArtistDetails = () => {
    const [artist, setArtist] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/artists/${id}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setArtist(data)
        })
    }, [])

    if (loading) {
      <h1>Loading...</h1>
    }else {
      return (
    <div>
        <h1>{artist.name}</h1> 
        <h2>{artist.genre}</h2>
        <h3>{artist.concerts[0].name}</h3> 
        {/* need to add concert cards for these */}
    </div>
  )
    }
  
}

export default ArtistDetails