import React, { useEffect } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard"
import ProductDetails from "../Pages/Dashboard/ProductDetails";

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
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default PrivateRoute;
