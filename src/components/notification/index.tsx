import React from "react";
const NotificationDropdown = ({ isOpen, notifications }) => {
  return (
    <div
      className={`absolute right-0 mt-6 w-48 bg-white shadow-lg rounded-md border border-gray-300 p-2 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="text-gray-600 text-sm mb-2">Notifications</div>
      <div className="divide-y">
        {notifications.map((notification, index) => (
          <div key={index} className="p-2">
            {notification}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdown;
