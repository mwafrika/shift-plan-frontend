import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Cog, OfficeBuilding } from "heroicons-react";
import SuperAdminDashboard from "../pages/superAdmin/dashboard";
import CompaniesPage from "../pages/superAdmin/companies";
import SettingPage from "../pages/superAdmin/settings";

export const menusSuperAdmin = [
  {
    value: "Home",
    link: "/",
    icon: <Home width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Companies",
    link: "/companies",
    icon: <OfficeBuilding width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Settings",
    link: "/settings",
    icon: <Cog width={22} className="mr-4" />,
    active: false,
  },
];

const SuperAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SuperAdminDashboard />} />
      <Route path="companies" element={<CompaniesPage />} />
      <Route path="settings" element={<SettingPage />} />
      <Route element={<Navigate to="/" />} />
    </Routes>
  );
};

export default SuperAdminRoutes;
