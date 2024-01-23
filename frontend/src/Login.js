// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import home from './main/Home';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(window.localStorage.getItem("user"))
    // Add your authentication logic here
    // For simplicity, we'll consider any non-empty username/password as a successful login
    if (username && password) {
      if(user.length>0){
        const u= user.find((u,i)=>(u.userName ===username && Number(u.password)===Number(password)))
        if(u){
          navigate('/home'); 
        }else{
          alert('Invalid username or password');
        }
      }
      // Redirect to the dashboard page
      
    } else {
      alert('Invalid username or password');
    }
  };

  return (
  
<>

    <section className='hero'>
    <div className='container'>
      <h2>Exim Login</h2>
      <form>
        <label className='label_text'>
          Username:
          <input type="text" value={username}placeholder='Write your username here...' required onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label className='label_text'>
          Password:
          <input type="password" value={password}placeholder='Write your password**' required onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      
    </div>
    </section>
    </>
  
  );
};

export default Login;
