import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userRole } from "../utils/userRole";

const ClientRoute = () => {
  return userRole === "ROLE_CLIENT" ? <Outlet /> : <Navigate to="/loginhome" />;
};

export default ClientRoute;
