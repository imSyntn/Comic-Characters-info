import React from 'react'
import './Header.scss'
import { Outlet } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import { useState, useEffect, createContext, useContext } from 'react';

export const DataContext = createContext();

const Header = () => {

  const[search, setSearch]=useState('');
  const[data, setData]=useState();

  const initializeSearch = async()=>{
    try {
      if(search.length>0){
        setData();
        const request = await fetch(`https://superheroapi.com/api/141284608947891/search/${search}`);
        const response = await request.json();
        const fetchedData = await response.results;
        setData(fetchedData)
      }
    } catch (error) {
      alert('Something went wrong. If you are using localHost, then please enable CORS')
    }
  }

  
  useEffect(()=>{
    initializeSearch();
  },[search])


  return (
    <DataContext.Provider value={data}>
    <div className='Header'>
        <h1>info</h1>
        <div>
              <input type="search" placeholder='eg. Ironman...' onChange={(e)=>setSearch(e.target.value)} />
            <div>
                <ImSearch onClick={initializeSearch} />
            </div>
        </div>
    </div>
    <Outlet />
    </DataContext.Provider>
  )
}

export default Header