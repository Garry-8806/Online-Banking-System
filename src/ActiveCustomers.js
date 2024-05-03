import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ActiveCustomers() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
      <h1>Active Customers</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table>
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
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.accountType}</td>
              <td>{item.gender}</td>
              <td>{item.panNumber}</td>
              <td>{item.initialDeposit}</td>
              <td>{item.mobileNumber || '-'}</td>
              <td>{item.state || '-'}</td>
              <td>{item.district || '-'}</td>
              <td>{item.pinCode || '-'}</td>
              <td>{item.accountNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveCustomers;
