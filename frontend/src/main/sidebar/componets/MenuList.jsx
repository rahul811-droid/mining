import { Menu } from 'antd'
import { useNavigate ,Link} from 'react-router-dom'

import {DashboardOutlined,
    CarOutlined,
    UnorderedListOutlined,
    CalendarOutlined,
    SettingOutlined,
    UserAddOutlined,
    BookOutlined,
    PartitionOutlined,
    ReloadOutlined,
    QrcodeOutlined,
    ShopOutlined,
    GooglePlusOutlined,
    HeatMapOutlined,
    ShoppingCartOutlined ,
    UsergroupDeleteOutlined,
    StopOutlined,
    MessageOutlined,
    CommentOutlined,
    LockOutlined ,
    UsergroupAddOutlined

} from '@ant-design/icons'
// import { ArrowRight } from 'react-bootstrap-icons';
const MenuList = () => {
  const navigate = useNavigate();
  return (
    <Menu  mode="inline" theme='dark' className='menu-bar'>




      <Menu.Item key="DashBoard" icon={<DashboardOutlined/>}>DashBoard</Menu.Item>

      <Menu.Item key="Check List" icon={<UnorderedListOutlined/>}>Check List</Menu.Item>

      <Menu.Item key="Vehicles" icon={<CarOutlined/>}>Vehicles</Menu.Item>

      <Menu.Item key="Driver" icon={<CalendarOutlined/>}>Driver</Menu.Item>
      

      <Menu.SubMenu key="Training Management" icon={<PartitionOutlined/>} title="Training Management" className='menu_submenu'>

        <Menu.Item key="Courses" icon={<BookOutlined/>}> Courses</Menu.Item>
        <Menu.Item key="Schedule" icon={<CalendarOutlined />}> Schedule</Menu.Item>

      </Menu.SubMenu>
      
     
      <Menu.SubMenu key="home" icon={<SettingOutlined/>} title="Master Data"  className='menu_submenu'>

        <Menu.Item key="Check List Items" icon={<UnorderedListOutlined/>}>Check List Items</Menu.Item>
        <Menu.Item key="Actions" icon={<UnorderedListOutlined/>}>Actions</Menu.Item>
        <Menu.Item key="RFID Inventory" icon={<QrcodeOutlined/>}>RFID Inventory</Menu.Item>
        <Menu.Item  key="Company" icon={<ShopOutlined/>}>Company</Menu.Item>
        <Menu.Item  key=">Email Setting" icon={<GooglePlusOutlined/>}>Email Setting</Menu.Item>
        <Menu.Item  key="Location" icon={<HeatMapOutlined/>}>Location</Menu.Item>
        <Menu.Item  key="Vehicle Manufacturer" icon={<CarOutlined/>}>Vehicle Manufacturer</Menu.Item>
        <Menu.Item  key="Material" icon={<ShoppingCartOutlined />}>Material</Menu.Item>
        <Menu.Item  key="Vehicle Model" icon={<CarOutlined/>}>Vehicle Model</Menu.Item>
        <Menu.Item  key="Party Type" icon={<UsergroupDeleteOutlined/>}>Party Type</Menu.Item>
        <Menu.Item key="Country" icon={<ReloadOutlined/>}>Country</Menu.Item>
        <Menu.Item key="Common status" icon={<ReloadOutlined/>} >Common status</Menu.Item>
        <Menu.Item key="Vehicle Types" icon={<ReloadOutlined/>}>Vehicle Types</Menu.Item>

      </Menu.SubMenu>

      <Menu.SubMenu key="Administartion" icon={<UserAddOutlined/>} title="Administartion"  className='menu_submenu'>

    <Menu.Item key="Exceptions Log" icon={<StopOutlined/>}>Exceptions Log</Menu.Item>
    <Menu.Item key="Languages" icon={<CommentOutlined/>}>Languages</Menu.Item>
    <Menu.Item key="Translations" icon={<MessageOutlined/>}>Translations</Menu.Item>
    <Menu.Item key="Roles" icon={<LockOutlined />}>Roles</Menu.Item>
   
    <Menu.Item key="User Management" onClick={()=>(navigate('/user'))} icon={<UsergroupAddOutlined/>}>User Management</Menu.Item>

      </Menu.SubMenu>
    </Menu>
    
  )
}

export default MenuList
