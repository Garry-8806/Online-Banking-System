// ViewCustomerByAccountNo.js

import React, { useState } from 'react';

import StaffProfileHeader from './StaffProfileHeader'; // Assuming you have a StaffProfileHeader component

import './css/View_Customer_by_acc_no.css'; // Import your CSS file

const ViewCustomerByAccountNo = () => {
  const [accountNo, setAccountNo] = useState('');
  const [customer, setCustomer] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accountNo }),
      });
      const data = await response.json();
      if (response.ok) {
        setCustomer(data);
        setErrorMessage('');
      } else {
        setCustomer(null);
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('An error occurred while fetching customer details.');
    }
  };

  return (
    <>
  
      <StaffProfileHeader />
      <div className="view_cust_byac_container_outer">
        <form onSubmit={handleSubmit}>
          <input
            name="account_no"
            placeholder="Customer Account No"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
          />
          <br />
          <input type="submit" name="submit_view" value="Submit" />
        </form>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {customer && (
        <div className="view_cust_byac_container_inner">
          <div className="cust_details">
            <span className="heading">Customer Details</span>
            <br />
            {Object.entries(customer).map(([key, value]) => (
              <label key={key}>
                {key}: {value}
              </label>
            ))}
          </div>
        </div>
      )}
      
    </>
  );
};

export default ViewCustomerByAccountNo;
