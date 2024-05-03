// ActiveCustomers.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/View_Customer_by_acc_no.css';

function ActiveCustomers() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchAccountNo, setSearchAccountNo] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    fetchActiveCustomers();
  }, []);

  const fetchActiveCustomers = () => {
    setLoading(true);
    axios.get('http://localhost:3000/Approved_Customers')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  };

  const handleSearch = () => {
    if (!searchAccountNo) {
      toast.error('Please enter an account number');
      return;
    }

    const filtered = data.find(item => item.accountNumber === parseInt(searchAccountNo));
    if (filtered) {
      setFilteredData(filtered);
      toast.success('Account details found');
    } else {
      toast.error('No details match with the entered account number');
      setFilteredData(null);
    }
  };

  return (
    <div className="active-customers-container">
      <h1>Active Customers Data</h1>
      <div className="search-container">
        <input 
          type="text" 
          value={searchAccountNo} 
          onChange={(e) => setSearchAccountNo(e.target.value)} 
          placeholder="Enter Customer Account Number" 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {filteredData && (
        <div className="customer-details-container">
          <table className="full-width-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Account Type</th>
                <th>Gender</th>
                <th>PAN Number</th>
                <th>Initial Deposit</th>
                <th>Mobile Number</th>
                <th>State</th>
                <th>District</th>
                <th>Pin Code</th>
                <th>Account Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{filteredData.id}</td>
                <td>{filteredData.name}</td>
                <td>{filteredData.email}</td>
                <td>{filteredData.address}</td>
                <td>{filteredData.accountType}</td>
                <td>{filteredData.gender}</td>
                <td>{filteredData.panNumber}</td>
                <td>{filteredData.initialDeposit}</td>
                <td>{filteredData.mobileNumber || '-'}</td>
                <td>{filteredData.state || '-'}</td>
                <td>{filteredData.district || '-'}</td>
                <td>{filteredData.pinCode || '-'}</td>
                <td>{filteredData.accountNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default ActiveCustomers;
