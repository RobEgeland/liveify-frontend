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

    if (loading) {
        <h1>Loading...</h1>
      }else {
        return (
      <div>
            <h1>{user.name}</h1> 
            <h2>{user.age}</h2>
            <NavLink to={`/users/${user.id}/new`}><button>Add new concert</button></NavLink>
            <h4>Concerts {user.name} has attended</h4>
            {user.concerts.map((concert, index) => <Concert concert={concert} key={index}/>)}
      </div>
    )}
}

export default UserDetails