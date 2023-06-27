import React, { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    toast("User logged in successfully");
    navigate("/");
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/assets/images/login.jpg')",
        marginTop: "-80px",
      }}
    >
      <ToastContainer />
      <section className="text-gray-600 mt-20 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              <span className="text-red-400">Shopify Store - </span>
              <span className="text-purple-400">
                Your One-Stop Shop for All Your Needs
              </span>
            </h1>
            <p className="leading-relaxed  text-green-900 text-xl font-bold mt-4 font-playfair">
              Welcome to the Shopify website, your ultimate destination for
              fashion enthusiasts and trendsetters. Our platform is a premier
              ecommerce website that offers a vast collection of stylish
              clothing for men, women, and children. With a focus on providing a
              seamless shopping experience, we bring you the latest fashion
              trends, top brands, and an extensive range of apparel to suit
              every occasion and personal style.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-900 rounded-lg gap-3 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-cyan-700 text-lg font-medium title-font mb-5">
              Sign In
            </h2>

            <div className="relative mb-4">
              <label
                htmlFor="username"
                className=" text-md text-orange-600 leading-7  "
              >
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                min="6"
                id="email"
                name="username"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-md text-orange-600 leading-7 "
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                min="6"
                onChange={(e) => setPassword(e.target.value)}
                required
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isFetching}
              className="text-white bg-indigo-500 border-0 py-2 disabled:to-gray-100 disabled:cursor-not-allowed px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>
            {error && (
              <p className="text-red-400 font-Playfair ">
                Something went Wrong!
              </p>
            )}
            <p className="my-2 text-lg text-amber-500">
              Dont Have a account? <NavLink to="/register">Register</NavLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
