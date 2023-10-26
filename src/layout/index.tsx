import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { useDispatch, useSelector } from "react-redux";
import { useJwt, decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

import AdminRoutes from "../routes/admin.routes";
import EmployeeRoutes from "../routes/employee.routes";
import SuperAdminRoutes from "../routes/superAdmin.routes";
import ManagerRoutes from "../routes/manager.routes";
import AuthRoutes from "../routes/auth.routes";

const Layout = ({ children, user, username }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    companyId: null,
    email: "",
    role: null,
  });

  // const { userInfo } = useSelector((state) => state?.auth);
  // const userInfo = decodeToken(localStorage.getItem("token") || "");
  // const { isExpired } = useJwt(userInfo?.token);

  const dispatch = useDispatch();

  const DashboardRedirects = {
    superAdmin: <SuperAdminRoutes />,
    admin: <AdminRoutes />,
    manager: <ManagerRoutes />,
    employee: <EmployeeRoutes />,
  };

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data !== null) {
      setUserInfo(JSON.parse(data));
      // dispatch(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    // if (isExpired) {
    //   navigate("/login");
    // } else
    if (userInfo?.role && DashboardRedirects[userInfo.role]) {
      navigate(DashboardRedirects[userInfo.role]);
    }
  }, [userInfo]);

  console.log(userInfo, "This is the user info 22222222");

  return (
    <div className="flex flex-row w-[100%]">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-[82%]">
        <Topbar user={user} name={username} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
