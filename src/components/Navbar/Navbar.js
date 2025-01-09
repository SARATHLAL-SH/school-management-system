import React from "react";
import routes from "../../routes";
import NavLink from "./Navlink";

export default function Navbar() {
  const userRole = localStorage.getItem("role");

  const filteredRoutes = routes.filter((route) => {
    if (!route.role) return true; // Include routes without a `role` property (public routes)
    return route.role === userRole; // Include routes where `role` matches the user's role
  });

  return (
    <div className="bg-gray-600 dark:bg-white flex flex-col fixed left-0 top-0 min-h-screen  w-[250px] p-5 z-10">
      {filteredRoutes.map((link) => (
        <NavLink key={link.path}>{link}</NavLink>
      ))}
    </div>
  );
}
