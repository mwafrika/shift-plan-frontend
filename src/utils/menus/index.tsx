import React from "react";
import { Home, Cog, OfficeBuilding } from "heroicons-react";

export const menusAdmin = [
  {
    value: "Home",
    link: "/admin",
    icon: <Home width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Departments",
    link: "/admin/departments",
    icon: <OfficeBuilding width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Settings",
    link: "/admin/settings",
    icon: <Cog width={22} className="mr-4" />,
    active: false,
  },
];

export const menusEmployee = [
  {
    value: "Shifts",
    link: "/employee",
    icon: <OfficeBuilding width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Settings",
    link: "/employee/settings",
    icon: <Cog width={22} className="mr-4" />,
    active: false,
  },
];

export const menusManager = [
  {
    value: "Employees",
    link: "/manager",
    icon: <Home width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Shifts",
    link: "/manager/shifts",
    icon: <OfficeBuilding width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Settings",
    link: "/manager/settings",
    icon: <Cog width={22} className="mr-4" />,
    active: false,
  },
];

export const menusSuperAdmin = [
  {
    value: "Home",
    link: "/superAdmin",
    icon: <Home width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Companies",
    link: "/superAdmin/companies",
    icon: <OfficeBuilding width={22} className="mr-4" />,
    active: false,
  },
  {
    value: "Settings",
    link: "/superAdmin/settings",
    icon: <Cog width={22} className="mr-4" />,
    active: false,
  },
];
