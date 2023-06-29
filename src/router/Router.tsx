import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";
import { Smartphones } from "../pages/Smartphones";
import { Laptops } from "../pages/Laptops";
import { Home } from "../pages/Home";
import { PhonesDetail } from "../pages/PhonesDetail";
import { LaptopDetail } from "../pages/LaptopDetail";
import { HomeDetail } from "../pages/HomeDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products/:productId",
        element: <HomeDetail />,
      },
      {
        path: "smartphones",
        element: <Smartphones />,
      },
      {
        path: "products/:productId",
        element: <PhonesDetail />,
      },
      {
        path: "laptops",
        element: <Laptops />,
      },
      {
        path: "products/:productId",
        element: <LaptopDetail />,
      },
    ],
  },
]);
