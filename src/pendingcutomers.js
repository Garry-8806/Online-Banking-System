import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/pending_customers.css';

function PendingCustomers() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [approvedCustomers, setApprovedCustomers] = useState([]);

  useEffect(() => {
    fetchPendingCustomers();
  }, []);

  const fetchPendingCustomers = () => {
    setLoading(true);
    axios.get('http://localhost:3000/registrationData')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  };

  const generateAccountNumber = () => {
    return Math.floor(10000000 + Math.random() * 90000000);
  };

  const handleApprove = (id) => {
    const approvedCustomer = data.find(item => item.id === id);
    if (approvedCustomer) {
      if (!approvedCustomer.accountNumber) {
        const accountNumber = generateAccountNumber();
        const updatedCustomer = {
          ...approvedCustomer,
          accountNumber: accountNumber
        };
        setApprovedCustomers(prevApproved => [...prevApproved, updatedCustomer]);
        setData(prevData => prevData.filter(item => item.id !== id));

        if (data.length === 1) {
          toast.info('No pending accounts for approval');
        } else {
          toast.success(`Account Number: ${accountNumber}. Do you want to approve this customer?`, {
            onClick: () => handleNextToast()
          });
        }

        axios.post('http://localhost:3000/Approved_Customers', updatedCustomer)
          .then(response => {
            console.log('Approved customer data stored successfully:', response.data);
            toast.success('Approved Customer Successfully! Go and check in View Active Customer with right tick.');
          })
          .catch(error => {
            console.error('Error storing approved customer data:', error);
          });

        axios.delete(`http://localhost:3000/registrationData/${id}`)
          .then(response => {
            console.log('Customer data removed from registrationData:', response.data);
          })
          .catch(error => {
            console.error('Error removing customer data from registrationData:', error);
          });
      }
    }
  };

  const handleNextToast = () => {
    // Handle the logic for the next toast notification
    // For example, show another toast here
    toast.info('Next toast notification');
  };

  return (
    <div>
      <h1>Pending Customer</h1>
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
            <th>Application Number</th>
            <th>Mobile Number</th>
            <th>State</th>
            <th>District</th>
            <th>Pin Code</th>
            <th>Action</th>
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
              <td>{item.applicationNumber || '-'}</td>
              <td>{item.mobileNumber || '-'}</td>
              <td>{item.state || '-'}</td>
              <td>{item.district || '-'}</td>
              <td>{item.pinCode || '-'}</td>
              <td>
                <button style={{width:"150px"}} onClick={() => handleApprove(item.id)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default PendingCustomers;
