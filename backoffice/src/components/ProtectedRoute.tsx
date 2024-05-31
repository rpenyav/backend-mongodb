import React from "react";
import { Navigate } from "react-router-dom";
import authService from "../services/authService";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = authService.getToken();
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
