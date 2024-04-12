
import './css/Emi_cal.css';

import React, { useState } from 'react';

const EmiCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalRepayment, setTotalRepayment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !rate || !tenure) {
      setError('Please fill all fields');
      return;
    }

    const amountFloat = parseFloat(amount);
    const rateFloat = parseFloat(rate) / 100; // Convert rate to decimal
    const tenureInt = parseInt(tenure);

    if (isNaN(amountFloat) || isNaN(rateFloat) || isNaN(tenureInt)) {
      setError('Please enter valid numbers for amount, rate, and tenure');
      return;
    }

    let totalInterestResult = 0;
    let totalRepaymentResult = amountFloat;

    for (let i = 1; i <= tenureInt; i++) {
      const yearlyInterest = totalRepaymentResult * rateFloat;
      totalInterestResult += yearlyInterest;
      totalRepaymentResult += yearlyInterest;
    }

    setEmi((amountFloat * rateFloat * Math.pow(1 + rateFloat, tenureInt)) / (Math.pow(1 + rateFloat, tenureInt) - 1));
    setTotalInterest(totalInterestResult.toFixed(2));
    setTotalRepayment(totalRepaymentResult.toFixed(2));
    setError('');
  };

  return (
    <div className="emi_calc_div">
      <h3 class="emical">EMI Calculator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="amount" placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="text" name="rate" placeholder="Interest Rate (%)" value={rate} onChange={(e) => setRate(e.target.value)} />
        <input type="text" name="tenure" placeholder="Loan Tenure (Year)" value={tenure} onChange={(e) => setTenure(e.target.value)} />
        <input type="submit" name="submit" value="Calculate" />
      </form>
      {error && <p className="error">{error}</p>}
      {emi && (
        <div>
          <h3>Loan Amount: {new Intl.NumberFormat().format(amount)}</h3>
          <h3>Loan Term: {tenure} Years</h3>
          <h3>Flat Interest Rate: {rate}%</h3>
          <h3>Total Interest: {new Intl.NumberFormat().format(totalInterest)}</h3>
          <h3>Total Repayment: {new Intl.NumberFormat().format(totalRepayment)}</h3>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;

