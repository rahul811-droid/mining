import React from 'react'
import Logo from './componets/Logo'
import ParkingLogo from './componets/ParkingLogo'
import AdminButton from './componets/AdminButton'
import 'bootstrap/dist/css/bootstrap.min.css';

import './header.css'
const HeaderHome = () => {
  return (
//     //  <div className='header_css'>
//       {/* <Logo/>  */}
//        {/* <ParkingLogo/>  */}
      
//        {/* <AdminButton/>  */}
       
      
// <div>

    <>
      <nav className="navbar navbar-expand-lg  bg-body-tertiary">
      <div className="container-fluid">
      {/* <div class="spinner-border text-primary" role="status"> */}
  {/* <span class="visually-hidden">Loading...</span> */}
{/* </div> */}
        <h2 className="navbar-brand" href="#">Exim Logistics</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" me-auto collapse navbar-collapse"  id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item  admin-css">
              <img src="./passportphoto.jpg"  className="my_photo" alt="" />
              <button type="button" class="btn btn-primary">Admin</button>
            </li>
           
           
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default HeaderHome;
