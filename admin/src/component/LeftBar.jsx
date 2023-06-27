import React from "react";
import {
  FiHome,
  FiBarChart,
  FiShoppingBag,
  FiUsers,
  FiFileText,
  FiMail,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="w-1/5 min-h-screen bg-white p-4 shadow-lg">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Dashboard</h2>
          <ul className="space-y-2 cursor-pointer">
            <NavLink to="/">
              <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
                <FiHome className="mr-2" />
                Home
              </li>
            </NavLink>
            <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiBarChart className="mr-2" />
              Analytics
            </li>
            <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiShoppingBag className="mr-2" />
              Sales
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Quick Menu</h2>
          <ul className="space-y-2 cursor-pointer">
            <NavLink to="/users">
              <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
                <FiUsers className="mr-2" />
                Users
              </li>
            </NavLink>
            <NavLink to="/products">
              <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
                <FiFileText className="mr-2" />
                Products
              </li>
            </NavLink>
            <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiShoppingBag className="mr-2" />
              Transactions
            </li>
            <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiBarChart className="mr-2" />
              Reports
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Notifications</h2>
          <ul className="space-y-2 cursor-pointer">
            <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiMail className="mr-2" />
              Mail
            </li>
            <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiMessageSquare className="mr-2" />
              Feedback
            </li>
            <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiMessageSquare className="mr-2" />
              Messages
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Staff</h2>
          <ul className="space-y-2 cursor-pointer ">
            <li className="flex items-center hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiBarChart className="mr-2" />
              Manage
            </li>
            <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiBarChart className="mr-2" />
              Analytics
            </li>
            <li className="flex items-center  hover:bg-slate-400 hover:p-1 hover:rounded-lg">
              <FiFileText className="mr-2" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
