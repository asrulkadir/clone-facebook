import Cookies from 'js-cookie';
import React from 'react';
import { Navigate, Outlet } from 'react-router';

const Private = () => {
  return Cookies.get('token') ? <Outlet /> : <Navigate to="/login" />;
};

export default Private;
