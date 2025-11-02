import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AppList from "../Pages/AppList";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement : <ErrorPage/>,
    children: [
      {
        index: true ,
        element: <Home />,
      },

      {
        path: "/applist",
        element: <AppList />,
      },

      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },

  // {
  //   path: '*',
  //   element : <ErrorPage/>
  // }
]);

export default router;
