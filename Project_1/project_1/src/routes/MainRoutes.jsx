import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import NotFound from "../pages/static/NotFound";
import AllProducts from "../pages/products/AllProducts";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products/all",
        element: <AllProducts />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default MainRoutes;
