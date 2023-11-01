import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./routes/admin.routes";
import ManagerRoutes from "./routes/manager.routes";
import EmployeeRoutes from "./routes/employee.routes";
import SuperAdminRoutes from "./routes/superAdmin.routes";
import Onboarding from "./pages/onboarding";
import ResetPassword from "./pages/auth/reset-password/ResetPassword";
import ConfirmPassword from "./pages/auth/reset-password/ConfirmPassword";
import Login from "./pages/auth/login/LoginPage";
import Signup from "./pages/auth/signup/index";

import AdminDashboard from "./pages/admin/dashboard";
import EmployeeDashboard from "./pages/employee/shifts";

import DepartmentPage from "./pages/admin/departments";
import SettingPage from "./pages/admin/settings";
import CompanyPage from "./pages/admin/companies";
import SettingEmployee from "./pages/employee/settings";

import ManagerDashboard from "./pages/manager/dashboard";
import ShiftPage from "./pages/manager/shifts";
import SettingPageManager from "./pages/manager/settings";
import AbsencePage from "./pages/manager/absences";

import SuperAdminDashboard from "./pages/superAdmin/dashboard";
import CompaniesPage from "./pages/superAdmin/companies";
import SettingPageSuperAdmin from "./pages/superAdmin/settings";

const App = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"))?.user;
  const [user, setUser] = useState(userInfo || {});

  console.log(userInfo, "typeof userInfo?.token", user);

  useEffect(() => {
    setUser(userInfo);
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ResetPassword />} />
        <Route path="/reset-password" element={<ConfirmPassword />} />

        {user?.role?.name === "admin" && (
          <Route path="/admin">
            <Route index element={<AdminDashboard />} />
            <Route path="departments" element={<DepartmentPage />} />
            <Route path="settings" element={<SettingPage />} />
          </Route>
        )}

        {user?.role?.name === "superAdmin" && (
          <Route path="/superAdmin">
            <Route index element={<SuperAdminDashboard />} />
            <Route path="companies" element={<CompaniesPage />} />
            <Route path="settings" element={<SettingPageSuperAdmin />} />
          </Route>
        )}

        {user?.role?.name === "manager" && (
          <Route path="/manager">
            <Route index element={<ManagerDashboard />} />
            <Route path="shifts" element={<ShiftPage />} />
            <Route path="settings" element={<SettingPageManager />} />
            <Route path="absences" element={<AbsencePage />} />
          </Route>
        )}

        {user?.role?.name === "employee" && (
          <Route path="/employee">
            <Route index element={<EmployeeDashboard />} />
            <Route path="shift" element={<EmployeeDashboard />} />
            <Route path="settings" element={<SettingEmployee />} />
          </Route>
        )}
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
