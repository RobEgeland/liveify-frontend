import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:9393/users")
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setUsers(data)
    })
  }, [])

  const usercard = users.map((user, index) => <User key={index} user={user} />)
  if (loading) {
    <h1>Loading...</h1>
  }else {
    return (
  <ul>
      <p>{usercard}</p>
  </ul>
)
  }
}

export default UserList