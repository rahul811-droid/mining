import React, { useEffect, useState } from 'react';
import BasicModel from '../../Componets/Model/BasicModel';
import './user-management-page.css';

const UserManagement = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
console.log(user)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem("user"));
    setUser(storedUser || []); // Set to an empty array if storedUser is null
  }, []);



  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search logic here, such as triggering a search API call.
  };

  return (
    <div>
      <div>
        <div className="input-group mb-3 search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <button type="button" onClick={handleOpen} className="btn btn-primary">
          New user
        </button>
      </div>

      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">UserId</th>
              <th scope="col">DisplayName</th>
              <th scope="col">Email</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((u,i) => (
              <tr key={i}>
                <th scope="row">{i}</th>
                <td>{u.userName}</td>
                <td>{u.displayName}</td>
                <td>{u.email}</td>
                <td>{u.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <BasicModel open={open} setUser={setUser}user={user} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} />
    </div>
  );
};

export default UserManagement;
