import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Cog, OfficeBuilding } from "heroicons-react";
import Login from "../pages/auth/login/LoginPage";
import Signup from "../pages/auth/signup/index";
import Onboarding from "../pages/onboarding";
import ResetPassword from "../pages/auth/reset-password/ResetPassword";
import ConfirmPassword from "../pages/auth/reset-password/ConfirmPassword";
import AdminRoutes from "./admin.routes";
import ManagerRoutes from "./manager.routes";
import EmployeeRoutes from "./employee.routes";
import SuperAdminRoutes from "./superAdmin.routes";

const Auth = () => {
  return (
    <Routes>
      <Route index element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ResetPassword />} />
      <Route path="/reset-password" element={<ConfirmPassword />} />
    </Routes>
  );
};

export default Auth;
