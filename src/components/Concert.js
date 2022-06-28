import React from 'react'
import { NavLink } from 'react-router-dom'

const Concert = ({concert}) => {
  return (
    <li>
        <NavLink to={`/concerts/${concert.id}`}><h3>{concert.name}</h3></NavLink>
    </li>
  )
}

export default Concert