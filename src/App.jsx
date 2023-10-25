import React from 'react';
import AdminRoutes from "./routes/admin.routes";
import EmployeeRoutes from './routes/employee.routes';
import SuperAdminRoutes from './routes/superAdmin.routes';

const App = () => {
  return (
    <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
      {/* <AdminRoutes /> */}
      {/* <EmployeeRoutes /> */}
      <SuperAdminRoutes />
    </div>
  );
};

export default App;