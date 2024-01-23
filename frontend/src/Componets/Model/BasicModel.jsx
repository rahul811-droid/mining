import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './UserModel.css';
import { Menu } from 'antd';

import { SaveOutlined, CloseOutlined } from '@ant-design/icons';
// import UserModalForm from './userForm';

const style = {
  boxSizing: 'borderBox',
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: '90%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModel({ open, setOpen,user, handleOpen, handleClose,setUser }) {
  const [formData, setFormData] = useState({
    userName: 'admin',
    displayName: '',
    email: '',
    userImage: null,
    password: '',
    confirmPassword: '',
    source: 'EximWeb',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // If it's a file input, update the state with the selected file
    if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform basic validation
    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords don't match");
      return;
    }

    setUser([...user,formData]);
   
    window.localStorage.setItem("user",JSON.stringify([...user,formData]))
    // try {
    //   // Make a POST request to the backend API
    //   const response = await fetch('http://localhost:5000/api/users', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log('User created successfully');
    //     // Add any further logic or UI updates here
    //     // ...
    //   } else {
    //     console.error('Failed to create user');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }

    // Close the modal
    handleClose();
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <header>
            <h3>
              <small className="text-body-secondary new-user-btn">New User</small>
            </h3>
            <div className="col-auto">
              <button type="button" className="btn btn-primary mb-3" onClick={handleClose}>
              <span class="material-symbols-outlined">
                close
                </span>
              </button>
            </div>
          </header>

          <form onSubmit={handleSubmit} className="parent_modal">
            <div className="input-group mb-3 hero_model">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Display Name"
                aria-label="Recipient's DisplayName"
                aria-describedby="basic-addon2"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="input-group-text" id="basic-addon2">@gmail.com</span>
            </div>

            <input
              type="file"
              className="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              name="userImage"
              onChange={handleChange}
            />

            <label htmlFor="inputPassword5" className="form-label label-tag">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              placeholder="********"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>

            <label htmlFor="inputPassword5" className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              id="inputPassword5"
              placeholder="********"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div id="passwordHelpBlock" className="form-text"></div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Save
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
