import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'

const UserList = ({people}) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const usercard = users.map((user, index) => <User key={index} user={user} />)

  useEffect(() => {
    setUsers(people)
    setLoading(false)
  },[usercard])

  

  if (loading) {
    return(
      <h1>Loading...</h1>
    )
  }else {
    return (
  <ul>
      <p>{usercard}</p>
  </ul>
)
  }
}

export default UserList