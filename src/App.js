import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";
import Body from "./Components/Body";
import ProductCards from "./Components/ProductCards";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import store from "./Utils/store";
import { Provider } from "react-redux";
import ProductDetail from "./Components/ProductDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <ProductCards />,
      },
      {
        path: "/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-[100vh]">
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
