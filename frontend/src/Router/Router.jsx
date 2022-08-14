import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AllFoods, Home, Register } from "../pages/index.js";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/all-foods" element={<AllFoods />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
