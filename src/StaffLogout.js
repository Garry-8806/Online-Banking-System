import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = () => {
      sessionStorage.clear();
      navigate('/staff_login');
    };

    logout();
  }, [navigate]);

  return null;
};

export default LogoutComponent;
