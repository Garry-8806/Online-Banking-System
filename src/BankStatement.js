// BankStatement.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BankStatement = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get('http://localhost:3000/transactions');
            setTransactions(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    return (
        <div style={{ width: "80%" }}> {/* Increase container size */}
            <h2 style={{ color: "black" }}>Bank Statement</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", width: "20%" }}>Transaction ID</th>
                        <th style={{ border: "1px solid black", width: "20%" }}>Date</th>
                        <th style={{ border: "1px solid black", width: "20%" }}>Time</th>
                        <th style={{ border: "1px solid black", width: "20%" }}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td style={{ border: "1px solid black", width: "20%" }}>{transaction.id}</td>
                            <td style={{ border: "1px solid black", width: "20%" }}>{transaction.date}</td>
                            <td style={{ border: "1px solid black", width: "20%" }}>{transaction.time}</td> 
                            <td style={{ border: "1px solid black", width: "20%" }}>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BankStatement;
