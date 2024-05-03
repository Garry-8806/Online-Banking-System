import React from 'react';
import './css/footer.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link from react-router-dom


function Footer() { // Changed the function name to start with uppercase
  return (
    <footer>
      <div className="container">
        <div className="follow_us">
          <label>Follow Us</label>
          <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            {/* <li><a href="https://twitter.com/">Twitter</a></li> */}
            <li><a href="https://www.instagram.com/">Instagram</a></li>
          </ul>
        </div>
        <div className="contact" id="contactus">
          <label>Contact Us</label>
          <ul>
          

            <p style={{ color: 'white' }}>412207 India,</p><p style={{ color: 'white' }}>Pune</p>
            <p style={{ color: 'white' }}>Mobile : 8806854380</p>
            <p style={{ color: 'white' }}>Email: contact@reactjs_dev</p>
            
          </ul>
        </div>
        <div className="links">
          <label>Important Links</label>
          <ul>
            <li><Link to="/LoanPage">For Loan</Link></li>
            <li><Link to="/emicalculator">Calculator</Link></li> {/* Changed href to Link */}
          </ul><br/>
        </div>
        <div className="links">
          <label>Other Important Links</label>
          <ul>
            <li><a href="">Link 1</a></li>
            <li><a href="">Link 2</a></li>
            <li><a href="">Link 3</a></li> 
          </ul><br/>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright &copy; 2023-24 Online Banking System. All rights reserved.</span>
      </div>
      <div className="bestview">
        <span>Site best viewed at 1024 x 768 resolution in Internet Explorer 10+, Google Chrome 49+, Firefox 45+ and Safari 6+</span>
      </div>
    </footer>
  );
}

export default Footer; // Export Footer

