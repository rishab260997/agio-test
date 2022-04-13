import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const Routers = () => {
  return (
    <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
