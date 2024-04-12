// ActiveCustomers.js

import React, { useEffect, useState } from 'react';
import StaffProfileHeader from './StaffProfileHeader'; // Assuming you have a StaffProfileHeader component
import './css/ActiveCustomers.css'; // Import your CSS file

const ActiveCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch data from the API or database
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint'); // Update with your API endpoint
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     
      <StaffProfileHeader />
      <div className="active_customers_container">
        <table border="1px" cellpadding="10">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Customer ID</th>
              <th>Account No.</th>
              <th>Mobile No.</th>
              <th>Email ID</th>
              <th>DOB</th>
              <th>Current Balance</th>
              <th>PAN</th>
              <th>Citizenship</th>
              <th>Debit Card No.</th>
              <th>CVV</th>
              <th>Last_Login</th>
              <th>LastTransaction</th>
              <th>Account Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.Username}</td>
                <td>{customer.Customer_ID}</td>
                <td>{customer.Account_no}</td>
                <td>{customer.Mobile_no}</td>
                <td>{customer.Email_ID}</td>
                <td>{customer.DOB}</td>
                <td>${customer.Current_Balance}</td>
                <td>{customer.PAN}</td>
                <td>{customer.CITIZENSHIP}</td>
                <td>{customer.Debit_Card_No}</td>
                <td>{customer.CVV}</td>
                <td>{customer.Last_Login}</td>
                <td>${customer.LastTransaction}</td>
                <td>{customer.Account_Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </>
  );
};

export default ActiveCustomers;
