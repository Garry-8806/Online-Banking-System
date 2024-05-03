// CustomerAccount.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Customers_Account.css';
import FundTransfer from './FundTransfer1';
import BankStatement from './BankStatement'; 

const CustomerAccount = ({ loggedInUser }) => {
    const [customerDetails, setCustomerDetails] = useState(null);
    const [error, setError] = useState('');
    const [showFundTransfer, setShowFundTransfer] = useState(false);
    const [showBankStatement, setShowBankStatement] = useState(false);
    const [transferredAmount, setTransferredAmount] = useState(0);
    const [transferSuccess, setTransferSuccess] = useState(false);
    const [logoutMessage, setLogoutMessage] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (transferSuccess) {
            setLogoutMessage('Please log in again to see the updated balance.');
        }
    }, [transferSuccess]);

    useEffect(() => {
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    }, [loggedInUser]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/InternetBankingServiceCustomerAccount');
            const customerData = response.data.find(customer => customer.fullName === loggedInUser.fullName);
            setCustomerDetails(customerData); 
            const lastTransferredAmount = localStorage.getItem('transferredAmount');
            if (lastTransferredAmount !== null) {
                setTransferredAmount(parseInt(lastTransferredAmount));
            }
            localStorage.setItem('customerDetails', JSON.stringify(customerData));
        } catch (error) {
            console.error('Error fetching customer details:', error);
            setError('Error fetching customer details. Please try again.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('customerDetails');
        localStorage.removeItem('loggedInUser');
        window.location.href = 'http://localhost:3001/CustomerLogin';
    };

    const updateBalance = async (accountNumber, transferAmount) => {
        setTransferredAmount(prevAmount => prevAmount + parseInt(transferAmount));

        try {
            // Store transaction details in the endpoint including current time
            const transaction = {
                accountNumber: accountNumber,
                amount: transferAmount,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString()
            };
            await axios.post('http://localhost:3000/transactions', transaction);

            setTransferSuccess(true);
        } catch (error) {
            console.error('Error storing transaction:', error);
        }
    };

    return (
        <div className="login-container" style={{ width: '150%', margin: '0 auto' }}>
            {/* Added inline style to increase width and center the login container */}
            <div className="customer-details-container" style={{ backgroundColor: 'white' }}>
                <div className="navigation-links">
                    <button onClick={() => setShowBankStatement(false)}>My Profile</button> 
                    <button onClick={() => setShowBankStatement(true)}>Statement</button>
                    <button onClick={() => setShowFundTransfer(true)}>Fund Transfer</button>
                </div>
                {showFundTransfer && (
                    <FundTransfer
                        onSuccess={() => setShowFundTransfer(false)}
                        setError={setError}
                        updateBalance={updateBalance}
                        loggedInUser={loggedInUser}
                        customerDetails={customerDetails} 
                    />
                )}
                {showBankStatement && <BankStatement />}
                {!showFundTransfer && !showBankStatement && customerDetails && (
                    <div className="customer-details">
                        <img src="./images/user_7547994.png" alt="Customer" />
                        <div className="details">
                            <p>ID: {customerDetails.id}</p> 
                            <p>Name: {customerDetails.fullName}</p>
                            <p>Account Number: {customerDetails.accountNumber}</p>
                            <p>Account Type: {customerDetails.accountType}</p>
                            <p>Available Balance: {parseInt(customerDetails.availableBalance || 0) + transferredAmount}</p>
                        </div>
                        <button style={{width:"550PX", margin:"15PX"}} onClick={handleLogout}>Logout</button>
                        {logoutMessage && <p>{logoutMessage}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomerAccount;
