import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoanApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/Loanapplicants');
      setApplications(response.data || []);
      setLoading(false);
    } catch (error) {
      setError('Error fetching loan applications');
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      await updateApplicationStatus(id, 'Approved');
    } catch (error) {
      setError('Error approving application');
    }
  };

  const handleReject = async (id) => {
    try {
      const reason = window.prompt('Enter reason for rejection:');
      if (reason) {
        await updateApplicationStatus(id, `Rejected: ${reason}`);
      }
    } catch (error) {
      setError('Error rejecting application');
    }
  };

  const updateApplicationStatus = async (id, status) => {
    try {
      const response = await axios.patch(`http://localhost:3000/Loanapplicants/${id}`, { status });
      if (response.status === 200) {
        const updatedApplications = applications.map((application) => {
          if (application.id === id) {
            return { ...application, status };
          }
          return application;
        });
        setApplications(updatedApplications);
      } else {
        throw new Error('Failed to update application status');
      }
    } catch (error) {
      setError('Error updating application status');
    }
  };

  return (
    <div>
      <h2 style={{ color: "black" }}>Loan Applications</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Amount</th>
            <th>Loan Type</th>
            <th>Interest Rate</th>
            <th>Uploaded Documents</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index}>
              <td>{application.name}</td>
              <td>{application.email}</td>
              <td>{application.phone}</td>
              <td>{application.amount}</td>
              <td>{application.loanType}</td>
              <td>{application.interestRate}</td>
              <td>
                <ul>
                  {application.documents && application.documents.map((document, docIndex) => (
                    <li key={docIndex}>
                      <a href={document.url} target="_blank" rel="noopener noreferrer">
                        {document.name}
                      </a>
                      {document.type === 'application/pdf' && (
                        <iframe src={document.url} width="100%" height="300px" title="Document"></iframe>
                      )}
                    </li>
                  ))}
                </ul>
              </td>
              <td>{application.status || 'Pending'}</td>
              <td>
                <button style={{ width: "150px" }} onClick={() => handleApprove(application.id)}>Approve</button>
                <button style={{ width: "150px" }} onClick={() => handleReject(application.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanApplications;
