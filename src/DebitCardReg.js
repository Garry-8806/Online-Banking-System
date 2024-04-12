import React, { useState } from 'react';
import './css/DebitCardForm.css'; // Import your CSS file

const DebitCardForm = () => {
  const [formData, setFormData] = useState({
    holder_name: '',
    dob: '',
    pan: '',
    mob: '',
    acc_no: ''
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
    // Implement form submission logic here
    console.log(formData); // For testing, you can log the form data
    // Redirect to confirmation page if needed
    // window.location.href = '/confirmation_page';
  };

  return (
    <div className="debit_card_form_container">
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="holder_name" placeholder="Account Holder Name" value={formData.holder_name} onChange={handleChange} /><br />
        <input type="text" name="dob" placeholder="Date of Birth" onFocus={(e) => e.target.type='date'} value={formData.dob} onChange={handleChange} /><br />
        <input type="text" name="pan" placeholder="PAN" value={formData.pan} onChange={handleChange} /><br />
        <input type="text" name="mob" placeholder="Registered Mobile (10 Digit)" value={formData.mob} onChange={handleChange} /><br />
        <input type="text" name="acc_no" placeholder="Account No" value={formData.acc_no} onChange={handleChange} /><br />
        <input type="submit" name="dbt_crd_submit" value="Submit" /><br />
      </form>
    </div>
  );
};

export default DebitCardForm;
