import React from 'react'
import { NavLink } from 'react-router-dom'

const Artist = ({ artist }) => {
  return (
    <li>
        <NavLink to={`/artists/${artist.id}`}><h3>{artist.name}</h3></NavLink>
    </li>
  )
}

export default Artist