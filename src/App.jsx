import React from "react";
import SuperAdminRoutes from "./routes/superAdmin.routes";

const App = () => {
  return (
    <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
      <SuperAdminRoutes />
    </div>
  );
};

export default App;
