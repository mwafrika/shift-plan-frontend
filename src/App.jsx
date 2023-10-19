import React from "react";
import AdminRoutes from "./routes/admin.routes";

const App = () => {
  return (
    <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
      <AdminRoutes />
    </div>
  );
};

export default App;
