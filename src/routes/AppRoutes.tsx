import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/shop"
            element={<Shop />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;