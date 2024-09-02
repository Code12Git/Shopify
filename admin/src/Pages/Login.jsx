import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const { isFetching, error } = user;
  console.log(isFetching, error);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    if (username && password) {
      login(dispatch, { username, password });
      navigate("/");
    } else {
      console.log("Invalid username or password");
    }
  };

  return (
    <section
      className="flex items-center justify-center min-w-full min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-10 bg-transparent shadow-2xl rounded-md">
        <h2 className="text-3xl font-bold mb-4 font-Rampart text-cyan-600 ml-20">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={credentials.username}
              name="username"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              name="password"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-indigo-500 border-0 py-2 disabled:to-gray-100 disabled:cursor-not-allowed px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>
          {error && (
            <p className="text-red-500 text-lg">Something went wrong!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Login;
