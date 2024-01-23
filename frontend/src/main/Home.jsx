
import React from 'react'
import HeaderHome from './header/HeaderHome'
import Sidebar from './sidebar/sidebar'

const Home = () => {
  return (
    <div className=''>
     
      <div className="container-fluid ">
        <div className="row">
        <HeaderHome/>
       
        </div>
      </div>
    
     <Sidebar/> 
    </div>
  )
}

export default Home
