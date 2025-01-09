import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavLink(props) {
  const { children } = props;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className="w-full flex flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Menu Item */}
      {!children.hidden && (
        <div
          className={`flex items-center px-3 py-2 cursor-pointer w-full rounded-md ${
            isHovered ? "bg-red-500" : "bg-transparent"
          } hover:bg-red-300`}
          onClick={() => handleNavigation(children.path)}
        >
          {/* Route Name */}
          <div className="flex items-center text-white flex-1">
            {children.name}
          </div>

          {/* Dropdown Icon */}
        </div>
      )}

      {/* Submenu */}
      {children.subRoutes && isHovered && (
        <div className="flex flex-col w-full bg-gray-800 align-start pl-4 py-2 border-l-2 border-red-500">
          {children.subRoutes
            .filter((subRoute) => !subRoute.hidden) // Exclude hidden subRoutes
            .map((subRoute, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 text-white w-full cursor-pointer hover:bg-red-600"
                onClick={(event) => {
                  event.stopPropagation(); // Prevent submenu from closing
                  handleNavigation(subRoute.path);
                }}
              >
                <div className="w-full">{subRoute.name}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
