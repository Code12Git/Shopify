import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import UserList from "./Pages/UserList";
import User from "./Pages/User";
import NewUser from "./Pages/NewUser";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import NewProduct from "./Pages/NewProduct";
import Login from "./Pages/Login";

function App() {
  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.userData.isAdmin;

  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />

          
            <>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                   <Home />
                  </>
                }
              />
              <Route
                path="/users"
                element={
                  <>
                    <Navbar />
                    <UserList />
                  </>
                }
              />
              <Route
                path="/user/:id"
                element={
                  <>
                    <Navbar />
                    <User />
                  </>
                }
              />
              <Route
                path="/newuser"
                element={
                  <>
                    <NewUser />
                  </>
                }
              />
              <Route
                path="/product/:productId"
                element={
                  <>
                    <Product />
                  </>
                }
              />
              <Route
                path="/products"
                element={
                  <>
                    <Navbar />
                    <ProductList />
                  </>
                }
              />
              <Route
                path="/newproduct"
                element={
                  <>
                    <Navbar />
                    <NewProduct />
                  </>
                }
              />
            </>
          )
        </Routes>
      </div>
    </>
  );
}

export default App;
