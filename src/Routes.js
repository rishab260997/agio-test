import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivateRoute from "./Routers/PrivateRoute";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <PrivateRoute />
    </div>
  );
};

export default Routers;
