import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Body from "./Components/Body";
import ProductCards from "./Components/ProductCards";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import store from "./Utils/store";
import { Provider } from "react-redux";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <div className="h-[100vh]">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<ProductCards />} />
              <Route path=":productId" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
