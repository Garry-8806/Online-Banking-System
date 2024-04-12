import React, { useState } from 'react';
import './css/AccountRegForm.css'; // Import your CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    mobile: '',
    email: '',
    landline: '',
    dob: '',
    pan_no: '',
    citizenship: '',
    homeaddrs: '',
    officeaddrs: '',
    country: 'INDIA', // Assuming default country is US
    state: '',
    city: '',
    pin: '',
    arealoc: '',
    nominee_name: '',
    nominee_ac_no: '',
    acctype: ''
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
    // window.location.href = '/cust_regfrm_confirm';
  };

  return (
    <div className="container_regfrm_container_parent">
      <h3>Online Account Opening Form</h3>
      <div className="container_regfrm_container_parent_child">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <input type="text" name="mobile" placeholder="Mobile no" value={formData.mobile} onChange={handleChange} required />
          <input type="text" name="email" placeholder="Email id" value={formData.email} onChange={handleChange} />
          <input type="text" name="landline" placeholder="Landline no" value={formData.landline} onChange={handleChange} />
          <input type="text" name="dob" placeholder="Date of Birth" onFocus={(e) => e.target.type='date'} value={formData.dob} onChange={handleChange} required />
          <input type="text" name="pan_no" placeholder="PAN Number" value={formData.pan_no} onChange={handleChange} required />
          <input type="text" name="citizenship" placeholder="Citizenship Number" value={formData.citizenship} onChange={handleChange} required />
          <input className="address" type="text" name="homeaddrs" placeholder="Home Address" value={formData.homeaddrs} onChange={handleChange} required />
          <input className="address" type="text" name="officeaddrs" placeholder="Office Address" value={formData.officeaddrs} onChange={handleChange} />
          <input type="text" name="country" placeholder="Country" value={formData.country} readOnly />
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="" disabled>Select State</option>
            <option value="MH">Maharashtra</option>
            <option value="GJ">Gujrat</option>
            <option value="GA">Goa</option>
            {/* Add more state options if needed */}
          </select>
          <select name="city" value={formData.city} onChange={handleChange} required>
            <option value="" disabled>Select City</option>
            <option value="Pune">Pune</option>
            <option value="Mapusa">Mapusa</option>
            <option value="Vadodara">Vadodara</option>
            {/* Add more city options if needed */}
          </select>
          <input type="text" name="pin" placeholder="Pin Code" value={formData.pin} onChange={handleChange} required />
          <input type="text" name="arealoc" placeholder="Area/Locality" value={formData.arealoc} onChange={handleChange} required />
          <input type="text" name="nominee_name" placeholder="Nominee Name (If any)" value={formData.nominee_name} onChange={handleChange} />
          <input type="text" name="nominee_ac_no" placeholder="Nominee Account no" value={formData.nominee_ac_no} onChange={handleChange} />
          <select name="acctype" value={formData.acctype} onChange={handleChange} required>
            <option value="" disabled>Select Account Type</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
          </select>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
