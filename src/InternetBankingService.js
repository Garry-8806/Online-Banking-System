import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/InternetBankingForm.css';

const InternetBankingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    email: '',
    mobileNumber: '',
    alternateNumber: '',
    accountType: '',
    accountNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
    securityQuestion1: '',
    securityAnswer1: '',
    securityQuestion2: '',
    securityAnswer2: '',
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleViewTerms = () => {
    alert(`Terms and Conditions:
    1. This internet banking service is provided for the convenience of our customers.
    2. The user is responsible for maintaining the confidentiality of their login credentials.
    3. Transactions conducted through this service are subject to verification and authorization.
    4. The bank reserves the right to modify or terminate this service at any time.`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/CustomerData');
      const existingData = response.data;
      const exists = existingData.some(
        (data) =>
          data.accountNumber === formData.accountNumber ||
          data.username === formData.username ||
          data.password === formData.password
      );

      if (exists) {
        toast.error('Account number, username, or password already exists. You cannot register.');
      } else {
        await axios.post('http://localhost:3000/CustomerData', formData);
        toast.success('Registration completed successfully! Go to login.');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed! Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Nationality:
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Zip:
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Alternate Number:
          <input
            type="tel"
            name="alternateNumber"
            value={formData.alternateNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Account Type:
          <input
            type="text"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Account Number:
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Security Question 1:
          <input
            type="text"
            name="securityQuestion1"
            value={formData.securityQuestion1}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Security Answer 1:
          <input
            type="text"
            name="securityAnswer1"
            value={formData.securityAnswer1}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Security Question 2:
          <input
            type="text"
            name="securityQuestion2"
            value={formData.securityQuestion2}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Security Answer 2:
          <input
            type="text"
            name="securityAnswer2"
            value={formData.securityAnswer2}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          I agree to the terms and conditions of the Internet Banking Service:
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            required
          />
        </label>
        <button type="button" onClick={handleViewTerms}>View Terms and Conditions</button>
        <button type="submit">Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default InternetBankingForm;
