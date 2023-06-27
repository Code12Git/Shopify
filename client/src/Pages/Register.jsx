import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { publicRequest } from "../utils/axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, username, password, confirmPassword } =
      credentials;
    if (confirmPassword !== password) {
      toast("Passwords must match !");
    } else {
      const user = {
        firstname,
        lastname,
        username,
        email,
        password,
        confirmPassword,
      };
      try {
        await publicRequest.post("/auth/register", user);
        toast("User registration successful");
        navigate("/login");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <section
      className="text-gray-600 body-font bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/assets/images/register.jpg')",
      }}
    >
      <ToastContainer />
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            <span className="text-red-400">Shopify Store - </span>
            <span className="text-purple-400">
              Your One-Stop Shop for All Your Needs
            </span>
          </h1>
          <p className="leading-relaxed  text-orange-400 text-2xl mt-4 font-playfair">
            Welcome to the Shopify website, your ultimate destination for
            fashion enthusiasts and trendsetters. Our platform is a premier
            ecommerce website that offers a vast collection of stylish clothing
            for men, women, and children. With a focus on providing a seamless
            shopping experience, we bring you the latest fashion trends, top
            brands, and an extensive range of apparel to suit every occasion and
            personal style.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-cyan-700 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-md text-orange-600 "
            >
              First Name
            </label>
            <input
              type="text"
              required
              id="firstname"
              value={credentials.firstname}
              name="firstname"
              onChange={ChangeHandler}
              className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-md text-orange-600 "
            >
              Last Name
            </label>
            <input
              type="text"
              required
              id="lastname"
              value={credentials.lastname}
              onChange={ChangeHandler}
              name="lastname"
              className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-md text-orange-600 "
            >
              Username
            </label>
            <input
              type="text"
              required
              id="username"
              value={credentials.username}
              onChange={ChangeHandler}
              name="username"
              className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className=" text-md text-orange-600 leading-7  "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={credentials.email}
              onChange={ChangeHandler}
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="text-md text-orange-600 leading-7 "
            >
              Password
            </label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={ChangeHandler}
              id="password"
              name="password"
              minLength="6"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="text-md text-orange-600 leading-7 "
            >
              Confirm Password
            </label>
            <input
              type="password"
              required
              id="confirm-password"
              value={credentials.confirmPassword}
              onChange={ChangeHandler}
              minLength="6"
              name="confirmPassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleChange}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Sign Up
          </button>
          <p className="my-2 text-lg text-amber-500">
            Already Have a account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
