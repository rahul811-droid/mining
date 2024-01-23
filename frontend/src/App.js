import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import Dashboard from './dashboard';
import Home from './main/Home';
import Sidebar from './main/sidebar/sidebar';
import HeaderHome from './main/header/HeaderHome';
import UserManagement from './Pages/Administation/UserManagement';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <HeaderHome />}

      <div className='d-flex'>
        <div className='left'>
        {location.pathname !== '/' && <Sidebar />}
          {/* <Sidebar /> */}
        </div>

        


        <div className='right w-75 '>
          <Routes>
            <Route path="/user" element={<UserManagement />} />
            <Route path="/" element={<Login />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;