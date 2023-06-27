import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
const Newsletter = () => {
  return (
    <div className="bg-slate-100  ">
      <div className=" flex flex-col gap-5 justify-center items-center mt-20 p-24">
        <h1 className="text-6xl font-bold  bg-gradient-to-r from-blue-500 via-green-500 to-yellow-400 bg-clip-text text-transparent font-Playfair">
          Newsletter
        </h1>
        <p className=" text-3xl">
          Get timely updates from your favourite products.
        </p>
        <div className="flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 w-96 rounded-md hover:bg-slate-200 max-w-sm sm:max-w-md lg:max-w-lg"
          />
          <button className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-2 sm:mt-0">
            <SendOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
