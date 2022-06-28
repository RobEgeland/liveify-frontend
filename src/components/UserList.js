import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setUsers(data)
    })
  }, [])

  const usercard = users.map((user, index) => <User key={index} user={user} />)
  return (
    <ul>{usercard}</ul>
  )
}

export default UserList