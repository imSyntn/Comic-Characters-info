import React from 'react'
import './Home.scss'
import Header from './Header'

import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className='Home'
        initial={{
          y:1000,
        }}
        animate={{
          y:0,
        }}
        transition={{
          duration: 0.3,
          when: 'beforeChildren',
          staggerChildren: 0.2,
        }}
    >
       <Header />
    </motion.div>
  )
}

export default Home