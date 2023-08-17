import React from 'react'
import './FetchReaultsContainer.scss'
import Card from './Card'
import {motion} from 'framer-motion'

import { useContext } from 'react'
import { DataContext } from './Header'

const FetchResultsContainer = () => {

  const data = useContext(DataContext);

  return (
    <motion.div className='FetchReaultsContainer'
    initial={{
      y: 0,
    }}
    animate={{
      y: 0,
    }}
    transition={{
      wwhen: 'beforeChildren',
      staggerChildren: 0.3,
    }}
    >
        {
          data ? 
          
            data.map((item, index)=> <Card key={index} name={item.name} image={item.image.url} id={item.id} />)
          
        :
          (<h2>Search To Get The Data</h2>)
        }
    </motion.div>
  )
}

export default FetchResultsContainer