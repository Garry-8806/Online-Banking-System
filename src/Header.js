import React from 'react';
import './css/header.css';

function Header() {
  return (
    <div className="header_main">
      <div className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#contactus">Contact Us</a></li>
          <li><a href="/staff_login">Staff Login</a></li>
        </ul>
      </div>
      <a href="/"><div className="logo-name">
        <div className="logo">
        <img className="logo_img" style={{ width: '100px', height: '90px' }} src="images/mobile-banking-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" alt="logo" />

        </div>
        <div className="name">
          <h5>Online Banking System</h5>
          <br />
          <h6>In React</h6>
        </div>
      </div></a>
      <div className="dif_banking">
        <div className="retail_banking">
          <a href="#">Retail Banking</a>
        </div>
        <div className="corporate_banking">
          <a href="#">Corporate Banking</a>
        </div>
        <div className="international_banking">
          <a href="#">International Banking</a>
        </div>
        <div className="international_banking">
          <a href="#">Apply Mobile Banking</a>
        </div>
        <div className="bank_servic">
          <a href="#">Services</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
