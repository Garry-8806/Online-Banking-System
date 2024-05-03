import React, { useState } from 'react';
import './css/credit_amt_customer.css'; // Import your CSS file

function CreditCustomerAccount() {
    const [accountNo, setAccountNo] = useState('');
    const [creditAmount, setCreditAmount] = useState('');

    const handleCredit = (event) => {
        event.preventDefault();
        // You can perform credit logic here
        console.log('Crediting amount to customer account...');
    };

    return (
        <html>
            <head>
                <title>Staff Home</title>
                <link rel="stylesheet" type="text/css" href="css/credit_customer_ac.css" />
            </head>
            <body>
                <header>
                    {/* Include your header component */}
                </header>
                <header>
                    {/* Include your staff profile header component */}
                </header>
                <div className="cust_credit_container">
                    <form onSubmit={handleCredit}>
                        <input
                            className="customer"
                            type="text"
                            name="customer_account_no"
                            placeholder="Customer A/c No"
                            value={accountNo}
                            onChange={(e) => setAccountNo(e.target.value)}
                            required
                        /><br />
                        <input
                            className="customer"
                            type="text"
                            name="credit_amount"
                            placeholder="Amount"
                            value={creditAmount}
                            onChange={(e) => setCreditAmount(e.target.value)}
                            required
                        /><br />
                        <input
                            className="customer"
                            type="submit"
                            name="credit_btn"
                            value="Credit"
                        />
                    </form>
                    <br />
                </div>
                <footer>
                    {/* Include your footer component */}
                </footer>
            </body>
        </html>
    );
}

export default CreditCustomerAccount;
