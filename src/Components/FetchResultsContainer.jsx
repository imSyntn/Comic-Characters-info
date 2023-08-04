import React, { useState } from 'react'
import './FetchReaultsContainer.scss'
import Card from './Card'

import { useContext } from 'react'
import { DataContext } from './Header'

const FetchResultsContainer = () => {

  // const[user, setUser]=useState(true)
  const data = useContext(DataContext);

  return (
    <div className='FetchReaultsContainer'>
        {
          data ? 
          
            data.map((item, index)=> <Card key={index} name={item.name} image={item.image.url} id={item.id} />)
          
        :
          (<h2>Search To Get The Data</h2>)
        }
    </div>
  )
}

export default FetchResultsContainer