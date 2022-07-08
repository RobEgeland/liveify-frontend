import React from 'react'
import { NavLink } from 'react-router-dom'

const Concert = ({concert}) => {
  return (
    <div>
        <NavLink to={`/concerts/${concert.id}`}><li>{concert.name}</li></NavLink> 
    </div>
  )
}

export default Concert