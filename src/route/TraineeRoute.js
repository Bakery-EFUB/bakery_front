import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userRole } from "../utils/auth";

const TraineeRoute = () => {
  return userRole === "ROLE_TRAINEE" ? <Outlet /> : <Navigate to="/" />;
};

export default TraineeRoute;
