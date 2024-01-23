import React, { useState } from 'react';
import './UserModel.css'; // Import your styling file

const UserModalForm = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    userName: '',
    displayName: '',
    email: '',
    image: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Add any validation logic here before saving
    onSave(formData);
    onClose();
  };

  return (
    <div className="user-modal">
      <div className="modal-header">
        
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <button onClick={handleSave} className="save-button">
          Save
        </button>
      </div>
      <div className="modal-body">
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />

        <label htmlFor="displayName">Display Name:</label>
        <input
          type="text"
          id="displayName"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UserModalForm;
