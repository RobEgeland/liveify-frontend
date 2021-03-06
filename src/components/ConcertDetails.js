import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const ConcertDetails = ({concerts}) => {
    const [concert, setConcert] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:9393/concerts/${id}`)
        .then(res => res.json())
        .then(data => {
            setConcert(data)
            setLoading(false)
        })
    }, [id])
    // const currrentConcert = concerts.filter(concert => concert.id === parseInt(id))
    // console.log(currrentConcert)

    // useEffect(() => {
    //     setConcert(currrentConcert[0])
    //     setLoading(false)
    // },[id])

    if (loading) {
        <h1>Loading...</h1>
      }else {
        return (
      <div>
          <h1>{concert.name}</h1> 
          <h2>{concert.venue}</h2>
          <h3>Artists: </h3>
          <h4><NavLink to={`/artists/${concert.artist.id}`}><h3>{concert.artist.name}</h3></NavLink></h4>
           
      </div>
    )}
    }



export default ConcertDetails;