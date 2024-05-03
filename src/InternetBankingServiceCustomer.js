import React, { useState } from 'react';
import axios from 'axios';


function CustomerSearch() {
  const [accountNumber, setAccountNumber] = useState('');
  const [customerDetails, setCustomerDetails] = useState(null);
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = async () => {
    try {
      const customerDataResponse = await axios.get('http://localhost:3000/CustomerData');
      const internetBankingServiceResponse = await axios.get('http://localhost:3000/InternetBankingServiceCustomerAccount');

      // Assuming both responses contain data in an array format
      const customerData = customerDataResponse.data;
      const internetBankingServiceData = internetBankingServiceResponse.data;

      // Perform the search based on the account number
      const matchedCustomer = customerData.find(customer => customer.accountNumber === accountNumber);
      const matchedInternetBankingCustomer = internetBankingServiceData.find(customer => customer.accountNumber === accountNumber);

      if (matchedCustomer && matchedInternetBankingCustomer) {
        // Display customer details
        setCustomerDetails({
          customer: matchedCustomer,
          internetBankingCustomer: matchedInternetBankingCustomer
        });
        setSearchResult('');
      } else {
        setSearchResult(`No active customer found with account number ${accountNumber}.`);
        setCustomerDetails(null);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setSearchResult('An error occurred while processing your request.');
    }
  };

  const handleDelete = async () => {
    try {
      // Delete the matched data
      await axios.delete(`http://localhost:3000/CustomerData/${customerDetails.customer.id}`);
      await axios.delete(`http://localhost:3000/InternetBankingServiceCustomerAccount/${customerDetails.internetBankingCustomer.id}`);

      // Optionally update the UI or show a success message
      setSearchResult(`Data for account number ${accountNumber} has been deleted successfully.`);
      setCustomerDetails(null);
    } catch (error) {
      console.error('Error occurred while deleting:', error);
      setSearchResult('An error occurred while deleting the data.');
    }
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h2 style={{color:"black"}}>Customer Details</h2>
      <input type="text" placeholder="Enter Account No"  style={{width:"30%", textAlign:"center"}} value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
      <button  onClick={handleSearch}>Search</button>
      {searchResult && <p>{searchResult}</p>}
      {customerDetails && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                
                <td>Customer ID</td>
                <td>{customerDetails.customer.id}</td>
              </tr>
              <tr>
                
                <td>Account Number</td>
                <td>{customerDetails.customer.accountNumber}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{customerDetails.customer.fullName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{customerDetails.customer.email}</td>
              </tr>
              {/* Add more fields as needed */}
            </tbody>
          </table>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default CustomerSearch;
