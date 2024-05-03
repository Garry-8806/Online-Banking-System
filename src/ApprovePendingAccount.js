// PendingApplications.js
import React, { useState, useEffect } from 'react';

const PendingApplications = () => {
  // State to store pending applications
  const [pendingApplications, setPendingApplications] = useState([]);
  // State to store search query
  const [searchQuery, setSearchQuery] = useState('');
  // State to store filtered applications
  const [filteredApplications, setFilteredApplications] = useState([]);

  // Fetch pending applications from the server
  useEffect(() => {
    // Mock fetch request, replace with actual API call
    const fetchPendingApplications = async () => {
      try {
        // Assuming fetchPendingApplications returns an array of pending applications
        const response = await fetch('http://localhost:3000/pendingApplications');
        if (!response.ok) {
          throw new Error('Failed to fetch pending applications');
        }
        const data = await response.json();
        setPendingApplications(data);
        setFilteredApplications(data);
      } catch (error) {
        console.error('Error fetching pending applications:', error);
      }
    };

    fetchPendingApplications();
  }, []);

  // Function to handle approval of an application
  const handleApprove = (applicationId) => {
    // Mock approval logic, replace with actual API call
    const approveApplication = async () => {
      try {
        const response = await fetch(`http://localhost:3000/pendingApplications/${applicationId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'approved' }), // Assuming status change to 'approved'
        });
        if (!response.ok) {
          throw new Error('Failed to approve application');
        }
        // Remove approved application from pendingApplications state
        setPendingApplications(prevApplications => prevApplications.filter(app => app.id !== applicationId));
        // Update filteredApplications state
        setFilteredApplications(prevApplications => prevApplications.filter(app => app.id !== applicationId));
      } catch (error) {
        console.error('Error approving application:', error);
      }
    };

    approveApplication();
  };

  // Function to handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    // Filter pendingApplications based on search query
    const filtered = pendingApplications.filter(app =>
      app.applicationNumber.toLowerCase().includes(query)
    );
    setFilteredApplications(filtered);
  };

  return (
    <div>
      <h2>Pending Applications</h2>
      <input
        type="text"
        placeholder="Search by application number"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredApplications.map(application => (
          <li key={application.id}>
            <div>Application Number: {application.applicationNumber}</div>
            <div>Name: {application.name}</div>
            <div>Email: {application.email}</div>
            <div>Account Type: {application.accountType}</div>
            <button onClick={() => handleApprove(application.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingApplications;

