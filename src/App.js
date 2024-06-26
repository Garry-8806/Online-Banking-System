// App.js
import React, { useEffect} from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StaffLogin from './StaffLogin';
import StaffProfile from './StaffProfile';
import ActiveCustomers from './ActiveCustomers';
import ViewCustomersByACCNO from './ViewCustomerbyACCNO';
import ApprovePendingAccount from  './ApprovePendingAccount';
import PendingCustomers from './pendingcutomers';
import DeleteCustomer from './delete_customers';
import LogoutComponent from './StaffLogout';
import StaffProfileHeader from './StaffProfileHeader'; // Corrected import path
import RegistrationForm from './AccountRegForm'; // Import the RegistrationForm component
import DebitCardReg from './DebitCardReg';
import FundTransfer from './FundTransfer';
import CustomerLogin from './CustomerLogin';
import LoanPage from './LoanPage';
import EmiCalculator from './EmiCalculator';
import ApplyForLoan from  "./ApplyForLoan";
import NewLoanApplications from './Loan_Application';
import InternetBankingServiceCustomer  from './InternetBankingServiceCustomer';


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
          <Route path="/viewcustomerByAccNO" element={<ViewCustomersByACCNO />} />
          {/* <Route path="/" element={<AccountRegConfirm />} /> */}
          <Route path="/approveCustomer" element={<ApprovePendingAccount />} />
          <Route path="/pending_customers" element={<PendingCustomers />} />
          <Route path="/delete_customer" element={<DeleteCustomer />} />
          <Route path="/InternetBankingServiceCustomer" element={<InternetBankingServiceCustomer />} />
          <Route path="/Loan_Application" element={<NewLoanApplications/>}/>
          <Route path="/logout" element={<LogoutComponent />} />
          <Route path="/StaffProfileHeader" element={<StaffProfileHeader />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/DebitCardReg" element={<DebitCardReg />} />
          <Route path="/FundTransfer" element={<FundTransfer />} />'
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/ApplyForLoan" element={<ApplyForLoan />} />'
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
      {/* <Chatbot /> */}
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
        <a href="/CustomerLogin"><li>Internet Banking</li></a>
        <a href="/FundTransfer"><li>Fund Transfer</li></a>
        <a href="/ApplyForLoan"><li>Apply For Loan</li></a>
      </ul>
    </div>
  );
}

// export function Chatbot() {
//   const [messages, setMessages] = useState([
//       { text: "Hi! How can I help you today?", sender: "bot" }
//   ]);
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (e) => {
//       setInputText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       if (inputText.trim() !== '') {
//           setMessages([...messages, { text: inputText, sender: "user" }]);
//           setInputText('');
//           generateBotResponse(inputText);
//       }
//   };

//   const generateBotResponse = (userInput) => {
//       // Replace this with your actual chatbot logic
//       const botResponse = "I'm sorry, I'm just a demo bot. I can't perform any real actions.";
//       setMessages([...messages, { text: botResponse, sender: "bot" }]);
//   };

//   return (
//       <div className="chatbot-container">
//           <div className="chatbot-messages">
//               {messages.map((message, index) => (
//                   <div key={index} className={`message ${message.sender}`}>
//                       {message.text}
//                   </div>
//               ))}
//           </div>
//           <form onSubmit={handleSubmit}>
//               <input
//                   type="text"
//                   placeholder="Type your message..."
//                   value={inputText}
//                   onChange={handleInputChange}
//               />
//               <button type="submit">Send</button>
//           </form>
//       </div>
//   );
// }




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