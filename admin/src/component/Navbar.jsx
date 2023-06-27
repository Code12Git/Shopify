import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    navigate("/login");
  };

  return (
    <div>
      <header className="text-gray-600 w-full body-font">
        <div className="container bg-white shadow-lg mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-3xl font-Playfair font-semibold bg-gradient-to-r from-amber-500 via-red-600 to-lime-400 bg-clip-text text-transparent">
              Admin Panel
            </span>
          </NavLink>
          <nav className="md:ml-auto flex gap-4 flex-wrap items-center text-base justify-center">
            <NotificationsIcon />
            <LanguageIcon />
            <SettingsIcon />
            <Avatar
              alt="Remy Sharp"
              src="https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
            <button
              onClick={handleLogout}
              className="bg-red-300 p-2 rounded-md text-white hover:bg-red-700"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
