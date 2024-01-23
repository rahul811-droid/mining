// import React from 'react'


import './sidebar.css'
import MenuList from './componets/MenuList';
import {Layout} from 'antd'
import { useState } from 'react';
// import ToggleThemeButton from './componets/ToggleThemeButton';



const {Header,Sider} = Layout ;

function Sidebar (){
  const [darkTheme,setDarkTheme] = useState('true')

  return (
    
      <Layout>

    <Sider
    className='sidebar'> 
       
        <MenuList />  
        {/* <ToggleThemeButton/> */}
        {/* <UsersPage/> */}
    </Sider>
    
      </Layout>
     
   
  )
}

export default Sidebar;
