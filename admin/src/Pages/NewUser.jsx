import React from "react";
import LeftSidebar from "../component/LeftBar";

export default function NewUser() {
  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1 ml-10 mt-10">
        <h1 className="text-2xl font-bold">New User</h1>
        <form className="flex flex-wrap mt-4">
          <div className="w-80 flex flex-col mr-8 mt-4">
            <label className="mb-2">Username</label>
            <input
              type="text"
              placeholder="john"
              className="h-12 px-4 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="w-80 flex flex-col mr-8 mt-4">
            <label className="mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John Smith"
              className="h-12 px-4 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="w-80 flex flex-col mr-8 mt-4">
            <label className="mb-2">Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              className="h-12 px-4 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="w-80 flex flex-col mr-8 mt-4">
            <label className="mb-2">Password</label>
            <input
              type="password"
              placeholder="password"
              className="h-12 px-4 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="w-80 flex flex-col mr-8 mt-4">
            <label className="mb-2">Phone</label>
            <input
              type="text"
              placeholder="+1 123 456 78"
              className="h-12 px-4 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="w-80 flex flex-col mr-8 mt-4">
            <label className="mb-2">Address</label>
            <input
              type="text"
              placeholder="New York | USA"
              className="h-12 px-4 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="w-80 flex flex-col mr-8 mt-4">
            <label className="mb-2">Gender</label>
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                className="mr-2"
              />
              <label htmlFor="male" className="mr-4">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                className="mr-2"
              />
              <label htmlFor="female" className="mr-4">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                className="mr-2"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="w-80 flex flex-col mr-8 mt-4">
            <label className="mb-2">Active</label>
            <select
              className="h-12 px-4 border border-gray-300 rounded focus:outline-none"
              name="active"
              id="active"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white p-4 hover:bg-blue-800 w-54 rounded-md mt-8">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
