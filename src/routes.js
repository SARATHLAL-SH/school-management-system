import Home from "./Modules/Home";

const route = [
        {
            name: "Home",
            path: "/Home",
            component: <Home />,
            role: "admin",
          },
          {
            name: "Dashboard",
            path: "/Home",
            component: <Home />,
            role: "admin",
            subRoutes: [
      {
        name: "Sub Dashboard",
        path: "/Home",
        component: <Home />,
        role: "admin",
      },]
          },
          {
            name: "Admission Management",
            path: "/Home",
            component: <Home />,
            role: "user",
          },
          {
            name: "Student Management",
            path: "/Home",
            component: <Home />,
            role: "admin",
          },
          {
            name: "parent Accounts",
            path: "/Home",
            component: <Home />,
            role: "parent",
          },
          {
            name: "Staff Management",
            path: "/Home",
            component: <Home />,
            role: "admin",
          },
          {
            name: "ID Card Printing",
            path: "/Home",
            component: <Home />,
            role: "admin",
          },
          {
            name: "Accountants",
            path: "/Home",
            component: <Home />,
            role: "user",
          },
          {
            name: "Public Messages",
            path: "/Home",
            component: <Home />,
            role: "admin",
          },
          {
            name: "Classes",
            path: "/Home",
            component: <Home />,
            role: "admin",
          },
    
]

export default route;