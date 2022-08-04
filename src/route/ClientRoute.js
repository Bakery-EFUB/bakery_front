import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userRole } from "../utils/auth";

const ClientRoute = () => {
  return userRole === "ROLE_CLIENT" ? <Outlet /> : <Navigate to="/" />;
};

export default ClientRoute;
