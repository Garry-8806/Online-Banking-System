import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ActiveCustomers() {
  const [data, setData] = useState([]);
  const [deletedCustomers, setDeletedCustomers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    fetchActiveCustomers();
    fetchDeletedCustomers();
  }, []);

  const fetchActiveCustomers = () => {
    setLoading(true);
    axios.get('http://localhost:3000/Approved_Customers')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching active customers');
        setLoading(false);
      });
  };

  const fetchDeletedCustomers = () => {
    axios.get('http://localhost:3000/Deleted_Customers')
      .then(response => {
        setDeletedCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching deleted customers:', error);
      });
  };

  const handleDelete = () => {
    if (!accountNumber) {
      toast.error('Please enter a customer account number');
      return;
    }

    const accountNumberInt = parseInt(accountNumber);
    if (isNaN(accountNumberInt)) {
      toast.error('Please enter a valid customer account number');
      return;
    }

    const customerToDelete = data.find(customer => customer.accountNumber === accountNumberInt);
    if (!customerToDelete) {
      toast.error('Customer account not found');
      return;
    }

    if (!reason) {
      toast.error('Please provide a reason for deleting the customer account');
      return;
    }

    axios.post('http://localhost:3000/Deleted_Customers', { ...customerToDelete, reason })
      .then(response => {
        toast.success('Customer account deleted successfully!');
        fetchDeletedCustomers(); // Refresh the list of deleted customers
        axios.delete(`http://localhost:3000/Approved_Customers/${customerToDelete.id}`)
          .then(() => {
            // Optionally, you can update the UI to remove the deleted customer from the list
          })
          .catch(error => {
            console.error('Error deleting customer from Active Customers:', error);
          });
      })
      .catch(error => {
        console.error('Error storing deleted customer data:', error);
        toast.error('Error deleting customer account');
      });
  };

  return (
    <div>
      <h1>Active Customers</h1>
      <div className="search-container">
        <input 
          type="text" 
          value={accountNumber} 
          onChange={(e) => setAccountNumber(e.target.value)} 
          placeholder="Enter Customer Account Number" 
        />
        <input 
          type="text" 
          value={reason} 
          onChange={(e) => setReason(e.target.value)} 
          placeholder="Reason for deletion" 
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ToastContainer />
      <h2>Deleted Customers</h2>
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
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {deletedCustomers.map(item => (
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
              <td>{item.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveCustomers;
