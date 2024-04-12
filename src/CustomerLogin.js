import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'; // Assuming you have a Header component
import Footer from './Footer'; // Assuming you have a Footer component
import './customer_login.css'; // Assuming you have the CSS file for styling

const CustomerLogin = () => {
  const [customerID, setCustomerID] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform validation and login logic here
    // For demonstration purposes, let's just redirect to a profile page if login is successful
    if (customerID && password) {
      // Redirect to profile page
      history.push('/customer_profile');
    } else {
      // Handle invalid login credentials
      alert('Please enter valid credentials.');
    }
  };

  return (
    <>
      <Header />
      <div className="login_container">
        <form onSubmit={handleLogin}>
          <div className="formspace">
            <p className="formspace2">
              <div className="form">
                <label className="login">LOGIN</label>
                <div className="input_field">
                  <label className="userdetail">Customer ID</label><br />
                  <input
                    className="customer_id"
                    type="text"
                    value={customerID}
                    onChange={(e) => setCustomerID(e.target.value)}
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
                  <a href="cust_forgetpass.php" className="help">
                    <label className="label_help">FORGET PASSWORD ?</label>
                  </a>
                  <img className="userloginimg" src="img/home-logo-hi.png" height="90px" width="90px" alt="User login" />
                </div>
              </div>
            </p>
          </div>
        </form>
        <br />
      </div>
      <Footer />
    </>
  );
};

export default CustomerLogin;
