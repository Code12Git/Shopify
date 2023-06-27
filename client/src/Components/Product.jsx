import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { NavLink } from "react-router-dom";

const Product = ({ item }) => {
  const handleHover = (event) => {
    const icons =
      event.currentTarget.getElementsByClassName("icon-container")[0];
    icons.style.opacity = 1;
  };

  const handleLeave = (event) => {
    const icons =
      event.currentTarget.getElementsByClassName("icon-container")[0];
    icons.style.opacity = 0;
  };

  return (
    <div className="flex w-full h-full ml-10 mt-20  flex-wrap cursor-pointer">
      <div className="flex rounded-md   gap-5 ">
        <div
          className="image-container relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <NavLink to={`/product/${item._id}`}>
            {" "}
            <img
              src={item.image}
              alt="shirt"
              style={{ width: "100%", height: "auto", maxWidth: "300px" }}
              className="transition duration-500 ease-out w-full transform hover:ease-in hover:-translate-y-1 hover:shadow-2x"
            />
          </NavLink>
          <div className="icon-container absolute top-0 right-0 opacity-0">
            <ShoppingCartOutlinedIcon className="text-white hover:text-blue-500 mr-2" />
            <NavLink to={`/product/${item._id}`}>
              <SearchOutlinedIcon className="text-white hover:text-blue-500 mr-2" />
            </NavLink>
            <FavoriteBorderOutlinedIcon className="text-white hover:text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
