import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Cog, OfficeBuilding } from "heroicons-react";
import Login from "../pages/auth/login/LoginPage";
import Signup from "../pages/auth/signup/index";
import Onboarding from "../pages/onboarding";
import ResetPassword from "../pages/auth/reset-password/ResetPassword";
import ConfirmPassword from "../pages/auth/reset-password/ConfirmPassword";

const Auth = () => {
  return (
    <Routes>
      <Route index element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ResetPassword />} />
      <Route path="/reset-password" element={<ConfirmPassword />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Auth;
