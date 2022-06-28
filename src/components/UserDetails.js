import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Concert from './Concert'

const UserDetails = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setUser(data)
            setLoading(false)
        })
        
    }, [])

    // const concertcard = user.concerts.map((concert) => <NavLink to={`/concerts/${concert.id}`}><h3>{concert.name}</h3></NavLink>)
    if (loading) {
        <h1>Loading...</h1>
      }else {
        return (
      <div>
            <h1>{user.name}</h1> 
            <h2>{user.age}</h2>
            {/* {concertcard} */}
      </div>
    )}
}

export default UserDetails