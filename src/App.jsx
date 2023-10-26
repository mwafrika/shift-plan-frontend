import AdminRoutes from "./routes/admin.routes";
import EmployeeRoutes from "./routes/employee.routes";
import SuperAdminRoutes from "./routes/superAdmin.routes";
import ManagerRoutes from "./routes/manager.routes";
import AuthRoutes from "./routes/auth.routes";

const App = () => {
  const userRole = "admin";

  return (
    <>
     <AuthRoutes />
      {/* <div className="w-full h-screen flex justify-between flex-row sm:flex-col">
        <AuthRoutes />
        {userRole === "admin" && <AdminRoutes />}
        {userRole === "employee" && <EmployeeRoutes />}
        {userRole === "superAdmin" && <SuperAdminRoutes />}
        {userRole === "manager" && <ManagerRoutes />}
      </div> */}
    </>
  );
};

export default App;
