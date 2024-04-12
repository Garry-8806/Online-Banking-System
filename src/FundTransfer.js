import React, { useState } from 'react';
import './css/fund_transfer.css'; // Import your CSS file

const FundTransfer = () => {
  const [formData, setFormData] = useState({
    trnsf_amount: '',
    trnsf_remark: '',
    beneficiary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For testing, you can log the form data
    // Implement form submission logic here
    // Redirect to confirmation page if needed
    // window.location.href = '/confirmation_page';
  };

  return (
    <div className="fundtransfer_conainer">
      <br />
      <span>IMPS (24x7 Instant Payment)</span><br /><br />
      <div className="fund_transfer">
        <div className="beneficiary_btn">
          <form id="form1" method="post">
            {/* <button type="button" className="beneficiary" onClick={() => handleAddBeneficiary()}>Add beneficiary</button>
            <button type="button" className="beneficiary" onClick={() => handleDeleteBeneficiary()}>Delete beneficiary</button>
            <button type="button" className="beneficiary" onClick={() => handleViewBeneficiary()}>View beneficiary</button> */}
          </form>
        </div><br />
        <form id="form2" onSubmit={handleSubmit}>
          <select name="beneficiary" value={formData.beneficiary} onChange={handleChange} required>
            <option className="default" value="" disabled>Select Beneficiary</option>
            {/* Map through beneficiaries if needed */}
            {/* Example: {beneficiaries.map(beneficiary => (
              <option key={beneficiary.id} value={beneficiary.accountNo}>{beneficiary.name}-{beneficiary.accountNo}</option>
            ))} */}
          </select><br />
          <input type="text" name="trnsf_amount" placeholder="Amount" value={formData.trnsf_amount} onChange={handleChange} required /><br />
          <input type="text" name="trnsf_remark" placeholder="Remark" value={formData.trnsf_remark} onChange={handleChange} /><br />
          <input type="submit" name="fnd_trns_btn" value="Send" /><br />
        </form>
      </div>
    </div>
  );
};

export default FundTransfer;
