import React from "react";
import LoginPage from './components/login/LoginPage.tsx'
import AdminRoutes from "./routes/admin.routes";

const App = () => {
  return (
    <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
      <AdminRoutes />
      <LoginPage />

    </div>
  );
};

export default App;
