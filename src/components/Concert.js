import React from 'react'
import { NavLink } from 'react-router-dom'

const Concert = ({concert}) => {
  return (
    <li>
        <NavLink to={`/concerts/${concert.id}`}><h3>{concert.name}</h3></NavLink>
        <h4>{concert.venue}</h4>
    </li>
  )
}

export default Concert