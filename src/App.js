import React from "react";
import Header from "../src/Components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductCards from "../src/Components/ProductCards";
import ProductDetail from "../src/Components/ProductDetail";
import Error from "../src/Components/Error";
import Body from "./Components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ProductCards />,
      },
      {
        path: "/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);
const AppLayout = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default AppLayout;
