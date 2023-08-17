import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


const Card = ({id,name, image}) => {
  
  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      // animate={{
      // }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.1,
      }}
    >
    <Link to={`/details/${id}`} className='card-link'>
    <div className='Card'>
        <img src={image} alt={`${name}`} />
        <p>{name}</p>
    </div>
    </Link>
    </motion.div>
  )
}

export default Card