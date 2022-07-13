import React, {useEffect, useState} from 'react'
import {useParams, NavLink} from 'react-router-dom'

const ArtistDetails = () => {
    const [artist, setArtist] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9393/artists/${id}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setArtist(data)
        })
    }, [id])

    if (loading) {
      <h1>Loading...</h1>
    }else {
      return (
    <div>
        <h1>{artist.name}</h1> 
        <h2>{artist.genre}</h2>
       <NavLink to={`/concerts/${artist.concerts.id}`}><h3>{artist.concerts.name}</h3> </NavLink>
    </div>
  )
    }
  
}

export default ArtistDetails