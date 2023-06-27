import Pay from "./Pages/Pay";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import ProductList from "./Pages/ProductList";
import SingleProductPage from "./Pages/SingleProductPage";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/paymentsuccess" element={<Success />} />

      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        exact
        path="/"
        element={!user ? <Navigate to="/login" /> : <Home />}
      />

      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/"
        element={!user ? <Navigate to="/register" /> : <Home />}
      />
    </Routes>
  );
}

export default App;
