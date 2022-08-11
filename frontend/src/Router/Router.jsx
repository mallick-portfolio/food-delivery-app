import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
const Router = () => {
  return <Routes>
    <Route path="/" element={<Navigate to={"/home"} />} />
  </Routes>;
};

export default Router;
