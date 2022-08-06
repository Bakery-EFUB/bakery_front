import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";

const ClientRoute = () => {
  const { role } = useAppSelector(state => state.user);

  return role === "ROLE_CLIENT" ? <Outlet /> : <Navigate to="/" />;
};

export default ClientRoute;
