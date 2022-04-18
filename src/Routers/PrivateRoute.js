import React, { useEffect } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";
import Navbar from "../Components/common/Navbar";
import CartPage from "../Pages/Cart";
import Dashboard from "../Pages/Dashboard";
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
    <div>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default PrivateRoute;
