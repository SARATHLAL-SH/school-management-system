import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { token } = useSelector((state) => state.login);
  const userRole = localStorage.getItem("role");

  console.log("token", token);
  const storedToken = localStorage.getItem("token");
  if (!userRole || (requiredRole && userRole !== requiredRole)) {
    return <Navigate to="/unautherized" />;
  }
  if (!token && !storedToken) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
