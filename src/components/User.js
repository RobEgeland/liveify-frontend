import React from 'react'
import { NavLink } from 'react-router-dom'

const User = ({user}) => {
  return (
    <NavLink to={`/users/${user.id}`}><li>{user.name}</li></NavLink>
  )
}

export default User