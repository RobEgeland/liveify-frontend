import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const UserDetails = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setUser(data)
        })
    }, [])
    if (loading) {
        <h1>Loading...</h1>
      }else {
        return (
      <div>
          <h1>{user.name}</h1> 
          <h2>{user.age}</h2>
          <NavLink to={`/artists/${concert.artist.id}`}><h3>{concert.artist.name}</h3></NavLink> 
      </div>
    )}
}

export default UserDetails