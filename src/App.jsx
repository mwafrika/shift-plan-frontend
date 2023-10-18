import React from "react";
import EmployeeRoutes from "./routes/employee.routes";
import ManagerRoutes from "./routes/manager.routes";
import AdminRoutes from "./routes/admin.routes";
import SuperAdminRoutes from "./routes/superAdmin.routes";
import Layout from "./components/layout";

const App = () => {
  return (
    <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
      <Layout>
        {role === "superAdmin" && <SuperAdminRoutes />}
        {role === "admin" && <AdminRoutes />}
        {role === "manager" && <ManagerRoutes />}
        {role === "employee" && <EmployeeRoutes />}
      </Layout>
    </div>
  );
};

export default App;
