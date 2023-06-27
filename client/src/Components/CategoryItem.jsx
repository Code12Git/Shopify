import React from "react";

import { NavLink } from "react-router-dom";
import { categories } from "../data";
const CategoryItem = () => {
  return (
    <div className="flex mt-10 gap-10 items-center justify-center cursor-pointer">
      {categories.map((item) => (
        <NavLink to={`/products/${item.cat}`} key={item.id}>
          <div className="image-container relative transition duration-400 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2x">
            <img src={item.img} className="relative" alt="" />
            <div className="text-container absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
              <p className="text-white text-center text-2xl font-bold font-Playfair">
                {item.title}
              </p>
              <button className="mt-2 bg-slate-100 hover:bg-slate-300 text-black py-2 px-4 rounded">
                SHOP NOW
              </button>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryItem;
