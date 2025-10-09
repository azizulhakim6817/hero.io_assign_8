import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import App from "../pages/App";
import Installations from "../pages/Installations";
import Error from "../pages/Error";
import NotFound from "../pages/NotFound";
import AppDetails from "../pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/app",
        Component: App,
      },
      {
        path: "/app-details/:id",
        Component: AppDetails,
      },
      {
        path: "/installation",
        Component: Installations,
      },
      {
        path: "*",
        Component: <NotFound />,
      },
    ],
  },
]);
