import React from 'react';
import './css/LoanPage.css'; // Import your CSS file for styling

const LoanPage = () => {
  const loanTypes = [
    {
      type: 'Personal Loan',
      interestRate: '10%',
      documents: [
        { name: 'ID Proof', details: 'Any government-issued ID such as Aadhar card, Passport, or Driver’s License' },
        { name: 'Address Proof', details: 'Utility bill, Rental agreement, or Aadhar card' },
        { name: 'Income Proof', details: 'Salary slips, Income Tax Returns, or Bank Statements' },
      ],
      image: './images/money-bag_1520632.png' // Replace with actual clipart image URL
    },
    {
      type: 'Home Loan',
      interestRate: '8.5%',
      documents: [
        { name: 'Property Documents', details: 'Sale deed, Title deed, or Property tax receipts' },
        { name: 'Income Proof', details: 'Salary slips, Income Tax Returns, or Bank Statements' },
        { name: 'Credit Score', details: 'Credit report from credit bureaus like CIBIL, Experian, or Equifax' },
      ],
      image: './images/loan_3529242.png' // Replace with actual clipart image URL
    },
    {
      type: 'Car Loan',
      interestRate: '9%',
      documents: [
        { name: 'Vehicle Details', details: 'Registration Certificate (RC), Invoice, or Insurance documents' },
        { name: 'Income Proof', details: 'Salary slips, Income Tax Returns, or Bank Statements' },
        { name: 'Credit Score', details: 'Credit report from credit bureaus like CIBIL, Experian, or Equifax' },
      ],
      image: './images/car-loan_5566885.png' // Replace with actual clipart image URL
    },
  ];

  return (
    <div className="loan-page">
      <h1>Loan Types</h1>
      <div className="loan-types">
        {loanTypes.map((loan, index) => (
          <div key={index} className="loan-card">
            <img src={loan.image} alt={loan.type} className="loan-clipart" />
            <h2>{loan.type}</h2>
            <p>Interest Rate: {loan.interestRate}</p>
            <h3>Mandatory Documents:</h3>
            <ul>
            {loan.documents.map((document, i) => (
             <li key={i}>
             <strong>{document.name}:</strong> {document.details}
             </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanPage;
