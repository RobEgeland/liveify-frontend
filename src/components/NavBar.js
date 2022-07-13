import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className='navbar'>
        <li className='li'><NavLink to="/">Home</NavLink></li>
        <li className='li'><NavLink to="/artists">Artists</NavLink></li>
        <li className='li'><NavLink to="/concerts">Concerts</NavLink></li>
        <li className='li'><NavLink to="/users">Users</NavLink></li>
    </ul>
  )
}

export default NavBar