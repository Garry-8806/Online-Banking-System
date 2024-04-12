// StaffProfileHeader.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/staff_profile_header.css';
import DbConnect from './db_connect'; // Import the db_connect.js file

function StaffProfileHeader() {
  const [staffDetails, setStaffDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaffDetails = async () => {
      try {
        // Check database connection before fetching staff details
        const isConnected = await DbConnect(); // Call the DbConnect function
        if (!isConnected) {
          // If database connection fails, redirect to login page or handle error
          navigate('/server_down');
          return;
        }

        // Proceed to fetch staff details if database connection is successful
        const response = await fetch('/check-staff-login');
        if (!response.ok) {
          navigate('/staff_login'); // Redirect to login if not logged in
          return;
        }

        const staffDetailsResponse = await fetch('/fetch-staff-details');
        if (!staffDetailsResponse.ok) {
          // Handle error fetching staff details
          console.error('Error fetching staff details:', staffDetailsResponse.statusText);
          return;
        }

        const staffDetailsData = await staffDetailsResponse.json();
        setStaffDetails(staffDetailsData);
      } catch (error) {
        console.error('Error fetching staff details:', error);
      }
    };

    fetchStaffDetails();
  }, [navigate]);

  if (!staffDetails) {
    return;
  }

  return (
    <div className="staff-profile-header">
      <h1>{staffDetails.name}</h1>
      <p>{staffDetails.position}</p>
    </div>
  );
}

export default StaffProfileHeader;
