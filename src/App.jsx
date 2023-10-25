import React from "react";
import ManagerRoutes from "./routes/manager.routes";

const App = () => {
  return (
    <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
       <ManagerRoutes />
    </div>
  );
};

export default App;
