import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.js";
import Products from "../pages/products.js";
import SelectedItem from "../pages/selectedItem.js";
import CartedItems from "../pages/cartedItems.js";
import AdminPortal from "../pages/admin/adminPortal.js";
import SignUpAndSignIn from "../pages/auth/signIn&SignUp.js";
import ProtectedRoute from "./protectedRoute.js";

export default function AllRoutes({ querySearch }) {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Home querySearch={querySearch} />} path="/" />
          <Route
            element={<Products querySearch={querySearch} />}
            path="/products"
          />
          <Route
            element={<SelectedItem querySearch={querySearch} />}
            path="/products/:id"
          />
          <Route element={<CartedItems />} path="/cartitems" />
        </Route>
        <Route element={<SignUpAndSignIn />} path="/signupandsignin" />
        <Route element={<ProtectedRoute role={"admin"} />}>
          <Route element={<AdminPortal />} path="/admin/adminPortal" />
        </Route>
      </Routes>
    </div>
  );
}
