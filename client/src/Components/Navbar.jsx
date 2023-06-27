import React, { useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../redux/cartRedux";
const Navbar = () => {
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  useEffect(() => {}, [quantity]);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(emptyCart());
    navigate("/login");
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="bg-cyan-800">
        <p className="text-white text-center font-Rampart">
          {" "}
          Super Deal! Free Shipping on Orders Over $50
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <p className="mr-5 text-black hover:text-gray-900">EN</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 px-4 py-2 bg-transparent-500 text-black rounded-lg"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m-1.42-1.42L13 13l-4.35 4.35M12 6a6 6 0 100 12 6 6 0 000-12z"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <NavLink
          to="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <span className="ml-3 font-Playfair font-semibold text-3xl bg-gradient-to-tl from-lime-600 via-purple-500 to-pink-600 text-transparent bg-clip-text">
            Shopify
          </span>
        </NavLink>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <div className="flex items-center gap-5 font-Playfair text-lg cursor-pointer">
            {currentUser ? (
              <>
                <p>
                  Logged in as:{" "}
                  <span className="text-red-400 font-serif">
                    {currentUser.userData.firstname}
                  </span>
                </p>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <p>Register</p>
                <p>Login</p>
              </>
            )}
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                <NavLink to="/cart">
                  <ShoppingCartOutlinedIcon className="text-black" />
                </NavLink>
              </div>
              <sup className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full p-1 text-white text-xs w-4 h-4 flex items-center justify-center">
                {quantity}
              </sup>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
