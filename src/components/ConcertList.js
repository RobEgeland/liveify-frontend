import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Concert from './Concert'

const ConcertList = () => {
  const [concerts, setConcerts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:9292/concerts")
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setConcerts(data)
    }, [])
  })

  const concertcards = concerts.map((concert, index) => <Concert key={index} concert={concert} />)
  if (loading) {
    <h1>Loading...</h1>
  }else {
    return (
  <ul>
      <NavLink to={"/concerts/new"}><button>Add new concert</button></NavLink>
      <p>{concertcards}</p>
  </ul>
)
  }
}

export default ConcertList