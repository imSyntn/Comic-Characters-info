import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'


const Card = ({id,name, image}) => {
  
  return (
    <Link to={`/details/${id}`} className='card-link'>
    <div className='Card'>
        <img src={image} alt={`${name}`} />
        <p>{name}</p>
    </div>
    </Link>
  )
}

export default Card