import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Concert from './Concert'

const UserDetails = ({concerts}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    
    const handleDelete = (id) => {
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
      const options = {
        method: "DELETE",
        headers
      }
      fetch(`http://localhost:9393/concerts/${id}`, options)
    }
    useEffect(() => {
      fetch(`http://localhost:9393/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
    }, [])
    
    const userConcerts = concerts.filter(concert => concert.user_id === id)

    if (loading) {
        <h1>Loading...</h1>
      }else {
        return (
      <div>
            <h1>{user.name}</h1> 
            <h2>{user.age}</h2>
            <NavLink to={`/users/${user.id}/new`}><button>Add new concert</button></NavLink>
            <h4>Concerts {user.name} has attended</h4>
            {userConcerts.map((concert, index) => <><Concert concert={concert} key={index}/> <NavLink to={`/concerts/${concert.id}/update`}><button>Edit Concert</button></NavLink><button onClick={() => handleDelete(concert.id)}>Delete Concert</button></>)}
      </div>
    )}
}

export default UserDetails