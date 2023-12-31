import React, { useEffect, useState } from "react";
import { UserCircle, Logout, Bell } from "heroicons-react";
import NotificationDropdown from "../components/notification";
import socketIOClient from "socket.io-client";
import { useNavigate } from "react-router-dom";

const Topbar = ({ user, name }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showNotifications) {
      setNotificationCount(0);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const socket = socketIOClient("http://localhost:5000", {
      path: "/socket.io",
    });
    socket.on("userConnected", (message) => {
      console.log(message);
    });

    socket.on("connection", (notification) => {
      setNotifications(
        (prevNotifications) => [notification, ...prevNotifications] as any,
      );
      setNotificationCount((prevCount) => prevCount + 1);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  console.log("notifications", notifications);

  return (
    <nav className="bg-background border-[1px] border-secondary/40 py-2 px-6">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-center gap-2">
          <UserCircle size={36} className="cursor-pointer text-primary" />
          <div className="gap-1">
            <h4 className="text-[12px] text-primary font-bold font-sans">
              {user}
            </h4>
            <p className="text-[10px] text-primary">{name}</p>
          </div>
        </div>
        <div className="flex justify-between gap-x-4">
          <div
            className="cursor-pointer text-primary font-bold"
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
              />
            </svg>
          </div>
          <div className="relative group">
            <Bell
              width={24}
              className="cursor-pointer text-primary"
              onClick={toggleNotifications}
            />
            {notificationCount > 0 && (
              <div className="bg-red-500 text-red/100 text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
                {notificationCount}
              </div>
            )}
            <NotificationDropdown
              isOpen={showNotifications}
              notifications={notifications}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
