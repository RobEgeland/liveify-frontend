import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/artists">Artists</NavLink></li>
        <li><NavLink to="/concerts">Concerts</NavLink></li>
        <li><NavLink to="/users">users</NavLink></li>
    </ul>
  )
}

export default NavBar