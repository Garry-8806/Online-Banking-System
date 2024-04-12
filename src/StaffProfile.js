// StaffProfile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/StaffProfile.css';
import StaffProfileHeader from './StaffProfileHeader'; // Updated import path

function StaffProfile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/staff_login');
  };

  return (
    <div>
      <StaffProfileHeader /> {/* Render StaffProfileHeader component */}
      <form method="post">
        <div className="staff_options">
          <input type="button" value="View Active Customer" onClick={() => navigate('/ActiveCustomers')} />
          <input type="button" value="View Customer by A/c No" onClick={() => navigate('/view_customer_by_acc_no')} />
          <input type="button" value="Approve Pending Account" onClick={() => navigate('/pending_customers')} />
          {/* Uncomment the line below if you have a view_trans route */}
          {/* <input type="button" value="View Transaction" onClick={() => navigate('/view_transaction')} /> */}
          <input type="button" value="Delete Customer A/c" onClick={() => navigate('/delete_customer')} />
          <input type="button" value="Credit Customer" onClick={() => navigate('/credit_customer_ac')} />
          <input type="button" value="Loan Applications" onClick={() => navigate('/delete_customer')} />

          <input type="button" value="Logout" onClick={handleLogout} />
        </div>
      </form>
    </div>
  );
}

export default StaffProfile;
