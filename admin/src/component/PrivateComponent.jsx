import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateComponent = () => {
  const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser.userData.isAdmin;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComponent;
