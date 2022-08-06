import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";

const BakerRoute = () => {
  const { role } = useAppSelector(state => state.user);

  return role === "ROLE_BAKER" ? <Outlet /> : <Navigate to="/" />;
};

export default BakerRoute;
