import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'

const UserList = ({people}) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUsers(people)
    setLoading(false)
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