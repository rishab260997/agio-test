import React, { useEffect } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard"

const PrivateRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default PrivateRoute;
