import React from "react";
import EmployeeRoutes from "./routes/employee.routes";

const App = () => {
  return (
    <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
      <EmployeeRoutes />
    </div>
  );
};

export default App;
