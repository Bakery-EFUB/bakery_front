import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userRole } from "../utils/auth";

const BakerRoute = () => {
  return userRole === "ROLE_BAKER" ? <Outlet /> : <Navigate to="/" />;
};

export default BakerRoute;
