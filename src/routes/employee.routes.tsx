import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Cog, OfficeBuilding } from 'heroicons-react';
import ShiftPage from '../pages/employee/shifts';
import SettingPage from '../pages/employee/settings';

export const menusEmployee = [
  {
    value: 'Shifts',
    link: '/',
    icon: <OfficeBuilding width={22} className="mr-4" />,
    active: false,
  },
  {
    value: 'Settings',
    link: '/settings',
    icon: <Cog width={22} className="mr-4" />,
    active: false,
  },
];

const EmployeeRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<ShiftPage />} />
      <Route path="settings" element={<SettingPage />} />
      <Route element={<Navigate to="/" />} />
    </Routes>
  );
};

export default EmployeeRoutes;