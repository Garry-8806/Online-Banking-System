// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StaffLogin from './StaffLogin';
import StaffProfile from './StaffProfile';
import ActiveCustomers from './ActiveCustomers';
import ViewCustomers_byACCNO from './ViewCustomer_byACCNO'
import LogoutComponent from './StaffLogout';
import StaffProfileHeader from './StaffProfileHeader'; // Corrected import path

import RegistrationForm from './AccountRegForm'; // Import the RegistrationForm component
import DebitCardReg from './DebitCardReg';
import FundTransfer from './FundTransfer';
import './index.css';


import LoanPage from './LoanPage';
import EmiCalculator from './EmiCalculator';
import ApplyForLoan from  "./ApplyForLoan";


function App() {
  useEffect(() => {
    document.title = 'Online Banking System'; // Set default title
  }, []);

  return (
    <Router>
      <div className="index_container">
        <Header />
        <Routes>
          <Route path="/staff_login" element={<StaffLogin />} />
          <Route path="/staff_profile" element={<StaffProfile />} />
          <Route path="/ActiveCustomers" element={<ActiveCustomers />} />
          <Route path="//view_customer_by_acc_no" element={<ActiveCustomers />} />
          <Route path="/logout" element={<LogoutComponent />} />
          <Route path="/StaffProfileHeader" element={<StaffProfileHeader />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/DebitCardReg" element={<DebitCardReg />} />
          <Route path="/FundTransfer" element={<FundTransfer />} />'
          <Route path="/LoanApplication" element={<ApplyForLoan />} />'
           <Route path="*" element={<Home />} />

           <Route path="/LoanPage" element={<LoanPage />} />
           <Route path="/emicalculator" element={<EmiCalculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


  

function Home() {
  return (
    <>
    
      <Slider />
      <NewsEvents />
      <OnlineServices />
      <AboutUs />
      <Disclaimer />
      {/* Use Link component to navigate to the Staff Login page */}
      {/* <Link to='/staff_login'>Staff Login</Link> */}
    </>
  );
}







export function Slider() {
  return (
    <div className="slider">
      <div className="slideimg">
        <img src="images/EDG_02.jpg" alt="Online Banking" />
        <img src="images/Online-Banking-Security-1-768x338.jpg" alt="Online Banking" />
        <img src="images/ten-reasons-internet-banking-opt.jpg" alt="Online Banking" />
        <img src="images/online-money-transaction.jpg" alt="Online Banking" />
        <img src="images/images-2.png" alt="Online Banking" />
      </div>
    </div>
  );
}

export function NewsEvents() {
  return (
    <div className="news_events">
      <h4>Tips | Updates | Events</h4>
      <ul>
        <li>First, open an account. Then apply for a debit card to get further details.</li>
        <li>And finally, proceed for Internet Banking Registration to create your internet banking account.</li>
      </ul>
    </div>
  );
}

export function OnlineServices() {
  return (
    <div className="online_services">
      <h4>Online Services</h4>
      <ul>
      <li> <a href="/register">Open Account</a></li>
        <a href="/DebitCardReg"><li>Apply Debit Card</li></a>
        <li id="ebanking">Internet Banking
          <div className="ebanking_options">
            <ul>
              <a href="customer_login.php"><li>Login</li></a>
              <a href="ebanking_reg_form.php"><li>Register</li></a>
            </ul>
          </div>
        </li>
        <a href="/FundTransfer"><li>Fund Transfer</li></a>
        <a href="/LoanApplication"><li>Apply For Loan</li></a>
      </ul>
    </div>
  );
}

export function AboutUs() {
  return (
    <div className="about" id="aboutus">
      <h2>About Us</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  );
}

export function Disclaimer() {
  return (
    <div className="disclaimer">
      <h2>Disclaimer !!</h2>
      <p>Our bank does not ask for the details of your account/PIN/password. Therefore any one pretending to be asking you for information from the bank/technical team may be fraudulent entities, so please beware.</p>
        <p>You should know how to operate net transactions and if you are not familiar you may refrain from doing so. You may seek bank's guidance in this regard. Bank is not responsible for online transactions going wrong.</p>
        <p>We shall also not be responsible for wrong transactions and wanton disclosure of details by you. Viewing option and transaction option on the net are different. You may exercise your option diligently.</p>
    </div>
  );
}




export default App;