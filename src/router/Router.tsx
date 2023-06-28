import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";
import { Smartphones } from "../pages/Smartphones";
import { Laptops } from "../pages/Laptops";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Smartphones />,
      },
      {
        path: "laptops",
        element: <Laptops />,
      },
    ],
  },
]);
