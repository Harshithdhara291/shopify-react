/* eslint-disable no-undef */
import "./App.css";
import Header from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import ProductDetailPage from "./pages/ProductDetailPage";
import NavbarUnAuth from "./components/NavbarUnAuth";
import { useLocation } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/register"];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {hideNavbar ? <NavbarUnAuth /> : <Header />}
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDetailPage />} />
        <Route
          exact
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/orders"
          element={
            <PrivateRoute>
              <MyOrders />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
