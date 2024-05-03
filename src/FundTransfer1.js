// FundTransfer.js

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FundTransfer = ({ onSuccess, setError, updateBalance, loggedInUser, customerDetails }) => {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [transferAmount, setTransferAmount] = useState('');

    const handleTransfer = async () => {
        if (!selectedAccount || !transferAmount) {
            alert('Please select an account and enter the transfer amount.');
            return;
        }

        try {
            await updateBalance(selectedAccount, transferAmount);
            onSuccess();
            toast.success('Amount transferred successfully!');
        } catch (error) {
            console.error('Error transferring funds:', error);
            alert('Error transferring funds. Please try again.');
        }
    };

    return (
        <div>
            <h2 style={{ color: "black" }}>Fund Transfer</h2>
            <div>
                <label htmlFor="account">Select Account:</label>
                <select id="account" onChange={e => setSelectedAccount(e.target.value)}>
                    <option value="">Select Account</option>
                    <option value={customerDetails.accountNumber}>
                        {`${customerDetails.fullName} - ${customerDetails.accountNumber}`}
                    </option>
                </select>
            </div>
            <div>
                <label htmlFor="amount">Amount to Transfer:</label>
                <input
                    type="number"
                    id="amount"
                    value={transferAmount}
                    onChange={e => setTransferAmount(e.target.value)}
                />
            </div>
            <button style={{width:"400PX", margin:"15PX"}} onClick={handleTransfer}>Transfer</button>
        </div>
    );
};

export default FundTransfer;
