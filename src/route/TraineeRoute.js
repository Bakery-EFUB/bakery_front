import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";

const TraineeRoute = () => {
  const { role } = useAppSelector(state => state.user);
  return role === "ROLE_TRAINEE" ? <Outlet /> : <Navigate to="/" />;
};

export default TraineeRoute;
