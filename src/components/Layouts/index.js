import { Routes, Route, Navigate } from "react-router-dom";
import routes from "../../routes";
import ProtectedRoute from "../ProtectedRoute";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  console.log("Layout");
  const getRoutes = (routes) => {
    return routes.map((route, key) => {
      if (route.subRoutes) {
        return route.subRoutes.map((subRoute, subKey) => (
          <Route
            path={subRoute.path}
            element={
              <ProtectedRoute requiredRole={subRoute.role}>
                {subRoute.component}
              </ProtectedRoute>
            }
            key={`${key}-${subKey}`}
          />
        ));
      }
      return (
        <>
          <Route
            path={route.path}
            element={
              <ProtectedRoute requiredRole={route.role}>
                {route.component}
              </ProtectedRoute>
            }
            key={key}
          />
        </>
      );
    });
  };

  return (
    <div className="flex justify-between h-screen flex-column">
      <div className="fixed top-0 left-0 h-full w-[250px] z-10">
        <Navbar />
      </div>
      <div className="ml-[250px] flex-1 p-4">
        <Routes>{getRoutes(routes)}</Routes>
      </div>
    </div>
  );
}
