import React from "react";
import { NavLink, useParams } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";
import Charts from "../component/Charts";
import { productData } from "../dummyData";
import LeftSidebar from "../component/LeftBar";
import { useSelector } from "react-redux";

export default function Product() {
  const params = useParams();
  const productId = params.productId;
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Product</h1>
          <NavLink to="/newproduct">
            <button className="w-20 bg-teal-500 text-white py-1 px-2 rounded-md">
              Create
            </button>
          </NavLink>
        </div>
        <div className="flex">
          <div className="flex-1">
            <Charts
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </div>
          <div className="flex-1 p-4 m-4 shadow-lg">
            <div className="flex items-center">
              <img
                src={product.image}
                alt=""
                className="w-10 h-10 rounded-full object-cover mr-4"
              />
              <span className="font-semibold">{product.title}</span>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <span className="font-semibold">id:</span>
                  <span className="ml-2">{product._id}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold">sales:</span>
                  <span className="ml-2">5123</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <span className="font-semibold">active:</span>
                  <span className="ml-2">yes</span>
                </div>
                <div className="flex">
                  <span className="font-semibold">in stock:</span>
                  <span className="ml-2">{product.inStock}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 m-4 shadow-lg">
          <form className="flex justify-between">
            <div className="flex flex-col">
              <label>Product Name</label>
              <input
                type="text"
                placeholder={product.title}
                className="border-b border-gray-300 py-1 px-2 mb-4 focus:outline-none"
              />
              <label> Product Description</label>
              <input
                type="text"
                className="border-b border-gray-300 py-1 px-2 mb-4 focus:outline-none"
                placeholder={product.description}
              />
              <label>Price</label>
              <input
                type="text"
                className="border-b border-gray-300 py-1 px-2 mb-4 focus:outline-none"
                placeholder={product.price}
              />
              <label>In Stock</label>
              <select
                name="inStock"
                id="idStock"
                className="border border-gray-300 py-1 px-2 mb-4 focus:outline-none"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt=""
                  className="w-20 h-20 rounded-lg object-cover mr-4"
                />
                <label htmlFor="file" className="cursor-pointer">
                  <PublishIcon />
                </label>
                <input type="file" id="file" className="hidden" />
              </div>
              <button className="border-none py-1 px-2 rounded-md bg-darkblue text-white font-semibold mt-4">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
