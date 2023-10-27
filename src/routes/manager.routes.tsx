import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Cog, OfficeBuilding } from "heroicons-react";
import ManagerDashboard from "../pages/manager/dashboard";
import ShiftPage from "../pages/manager/shifts";
import SettingPage from "../pages/manager/settings";
import AbsencePage from "../pages/manager/absences";

export const menusManager = [
  {
    value: "Employees",
    link: "/",
    icon: <Home width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Shifts",
    link: "/shifts",
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

const ManagerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ManagerDashboard />} />
      <Route path="shifts" element={<ShiftPage />} />
      <Route path="absences" element={<AbsencePage />} />
      <Route path="settings" element={<SettingPage />} />
      <Route element={<Navigate to="/" />} />
    </Routes>
  );
};

export default ManagerRoutes;
