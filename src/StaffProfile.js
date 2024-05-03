/* StaffProfile.js */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/StaffProfile.css';
import StaffProfileHeader from './StaffProfileHeader';

function StaffProfile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/staff_login');
  };

  return (
    <div>
      <StaffProfileHeader />
      <form method="post">
        <div className="staff_options">
          <input type="button" value="View Active Customer" onClick={() => navigate('/ActiveCustomers')} />
          <input type="button" value="View Customer by A/c No" onClick={() => navigate('/viewcustomerByAccNO')} />
          <input type="button" value="Approve Pending Account" onClick={() => navigate('/pending_customers')} />
          <input type="button" value="Delete Customer A/c" onClick={() => navigate('/delete_customer')} />
          <input type="button" value="Internet Banking Service Customers" onClick={() => navigate('/InternetBankingServiceCustomer')} />
          <input type="button" value="Loan Applications" onClick={() => navigate('/Loan_Application')} />
          <input type="button" className="logout-btn" value="Logout" onClick={handleLogout} />
        </div>
      </form>
    </div>
  );
}

export default StaffProfile;
