import React from 'react'
import { IoIosMan } from "react-icons/io";
import { Menu } from 'antd'
import {UserAddOutlined}from '@ant-design/icons'
const AdminButton = () => {
  return (
    <div>
    
      <Menu className='admin_logo'>
   
    <Menu.Item icon={<UserAddOutlined/>}> <button>Admin</button> </Menu.Item>

      </Menu>
    </div>
  )
}

export default AdminButton
