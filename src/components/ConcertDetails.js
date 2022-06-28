import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const ConcertDetails = () => {
    const [concert, setConcert] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/concerts/${id}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setConcert(data)
        })
    }, [])

    if (loading) {
        <h1>Loading...</h1>
      }else {
        return (
      <div>
          <h1>{concert.name}</h1> 
          <h2>{concert.venue}</h2>
          <ul><NavLink to={`/artists/${concert.artist.id}`}><h3>{concert.artist.name}</h3></NavLink></ul>
           
      </div>
    )}
    }



export default ConcertDetails;