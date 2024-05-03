import React, { useState } from 'react';
import "./css/ApplyForLoan.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LoanApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [loanType, setLoanType] = useState('Personal Loan');
  const [interestRate, setInterestRate] = useState('10%');
  const [documents, setDocuments] = useState([]);

  // Function to handle loan type change
  const handleLoanTypeChange = (e) => {
    const selectedLoanType = e.target.value;
    setLoanType(selectedLoanType);
    // Set interest rate based on selected loan type
    switch (selectedLoanType) {
      case 'Personal Loan':
        setInterestRate('10%');
        break;
      case 'Home Loan':
        setInterestRate('8.5%');
        break;
      case 'Car Loan':
        setInterestRate('9%');
        break;
      default:
        setInterestRate('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Handle form submission here
      const formData = { name, email, phone, amount, loanType, interestRate, documents };
      console.log('Form submitted:', formData);
      // Send data to backend endpoint
      await axios.post('http://localhost:3000/Loanapplicants', formData);
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setAmount('');
      setDocuments([]);
      // Display success message
      toast.success('Loan application submitted successfully!');
    } catch (error) {
      console.error('Error submitting loan application:', error.message);
    }
  };

  return (
    <div className="form-container">
      <h2 style={{color:"black"}}>Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Loan Amount (in ₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <div>
          <label htmlFor="loanType">Loan Type:</label>
          <select id="loanType" value={loanType} onChange={handleLoanTypeChange}>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Home Loan">Home Loan</option>
            <option value="Car Loan">Car Loan</option>
          </select>
          <span className="blinking">Interest Rate: {interestRate}</span>
        </div>
        <div className="documents-section">
          <label className="MD">Mandatory Documents:</label>
          {loanType === 'Personal Loan' && (
            <>
              <p>ID Proof:</p>
              <input type="file" onChange={(e) => setDocuments(Array.from(e.target.files))} />
              <p>Address Proof:</p>
              <input type="file" onChange={(e) => setDocuments(Array.from(e.target.files))} />
              <p>Income Proof:</p>
              <input type="file" onChange={(e) => setDocuments(Array.from(e.target.files))} />
            </>
          )}
          {loanType === 'Home Loan' && (
            <>
              <p>Property Documents:</p>
              <input type="file" onChange={(e) => setDocuments(Array.from(e.target.files))} />
              <p>Income Proof:</p>
              <input type="file" onChange={(e) => setDocuments(Array.from(e.target.files))} />
              <p>Credit Score:</p>
              <input type="file" onChange={(e) => setDocuments(Array.from(e.target.files))} />
            </>
          )}
          {loanType === 'Car Loan' && (
            <>
              <p>Vehicle Details:</p>
              <input type="file" onChange={(e) => setDocuments(Array.from(e.target.files))} />
              <p>Income Proof:</p>
              <input type="file" onChange={(e) => setDocuments(Array.from(e.target.files))} />
              <p>Credit Score:</p>
              <input type="file" onChange={(e) => setDocuments(Array.from(e.target.files))} />
            </>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoanApplicationForm;
