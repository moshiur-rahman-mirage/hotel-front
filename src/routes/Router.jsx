import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Dashboard from "../page/dashboard/Dashboard";
import Chart from "../page/dashboard/chart/Chart";
import User from "../page/dashboard/user/User";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "user",
            element: <User />,
          },
        ],
      },
    ],
  },
]);

export default Router;
