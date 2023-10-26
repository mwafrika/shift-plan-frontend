import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Cog, OfficeBuilding } from 'heroicons-react';
import AdminDashboard from '../pages/admin/dashboard';
import DepartmentPage from '../pages/admin/departments';
import SettingPage from '../pages/admin/settings';
import CompanyPage from '../pages/admin/companies';

export const menusAdmin = [
  {
    value: 'Home',
    link: '/',
    icon: <Home width={22} className="mr-4" />,
    active: false,
  },
  {
    value: 'Companies',
    link: '/companies',
    icon: <OfficeBuilding width={22} className="mr-4" />,
    active: false,
  },
  {
    value: 'Departments',
    link: '/departments',
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

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<AdminDashboard />} />
      <Route path="departments" element={<DepartmentPage />} />
      <Route path="companies" element={<CompanyPage />} />
      <Route path="settings" element={<SettingPage />} />
      <Route element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AdminRoutes;