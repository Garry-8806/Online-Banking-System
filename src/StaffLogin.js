import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffLogin.css';

const StaffLogin = () => {
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Example authentication logic (replace with your actual authentication logic)
    if (staffId === 'admin' && password === 'password') {
      sessionStorage.setItem('staff_id', staffId); // Store staffId in session storage
      navigate('/staff_profile');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="staff_login_container">
      <form onSubmit={handleLogin}>
        <br />
        <div className="formspace">
          <p className="formspace2">
            <div className="form">
              <label className="login">Staff Login</label>
              <div className="input_field">
                <label className="userdetail">Staff ID</label><br />
                <input
                  className="customer_id"
                  type="text"
                  value={staffId}
                  onChange={(e) => setStaffId(e.target.value)}
                  required
                /><br />
                <label className="userdetail">Password</label><br />
                <input
                  className="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                /><br />
                <input className="login-btn" type="submit" value="LOGIN" /><br />
                <a className="help">
                  <label className="label_help">FORGET PASSWORD ?</label>
                </a>
                <img className="userloginimg" src="images/staff.png" height="150px" width="150px" alt="User login" />
              </div>
            </div>
          </p>
        </div>
      </form>
    </div>
  );
};

export default StaffLogin;
