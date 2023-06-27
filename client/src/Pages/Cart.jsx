import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { increaseQuantity } from "../redux/cartRedux";
import { decreaseQuantity } from "../redux/cartRedux";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-6">
        <h1 className="text-center text-4xl font-Playfair text-gray-500">
          YOUR BAG
        </h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:justify-between md:ml-10 md:mr-10 items-center">
            <NavLink to="/">
              <div className="flex">
                <button className="bg-slate-100 hover:bg-slate-400 p-2 rounded-md shadow-lg">
                  CONTINUE SHOPPING
                </button>
              </div>
            </NavLink>
            {cart.products.length > 0 && (
              <div className="flex justify-center cursor-pointer">
                <div className="flex gap-3">
                  <p className="underline">
                    Shopping Bag({cart.products.length})
                  </p>
                </div>
              </div>
            )}

            <NavLink to="/pay">
              <div className="flex justify-end">
                <button className="bg-gray-600 p-2 hover:bg-gray-700 text-white rounded-md shadow-lg">
                  CHECKOUT NOW
                </button>
              </div>
            </NavLink>
          </div>
          <div className="ml-10 flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col gap-4 flex-wrap">
              {cart.products.map((product) => {
                return (
                  <>
                    <NavLink to={`/product/${product._id}`}>
                      <img src={product.image} alt="" className=" w-44	h-44" />
                    </NavLink>
                    <div className="flex flex-col gap-5" key={product.id}>
                      <h1>
                        <span className="font-bold">Product:</span>{" "}
                        {product.title}
                      </h1>
                      <div className="flex gap-20">
                        <h1>
                          <span className="font-bold">ID:</span> {product._id}
                        </h1>
                        <div className="flex gap-1 items-center">
                          <RemoveIcon />

                          <p className="border border-blue-200 text-xl rounded-md px-2">
                            {product.quantity}
                          </p>
                          <AddIcon />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <ProductColor color={product.color} />
                        <p className="text-2xl text-slate-500">
                          ₹ {(product.price * 74.5).toFixed(0)}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-bold">Size:</span>{" "}
                          {product.size}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="mt-10 md:mt-0 h-96 flex flex-col gap-4 border mr-10 border-slate-400 rounded-md p-8 w-full md:w-96">
              <p className="text-2xl text-gray-400">ORDER SUMMARY</p>
              <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                  <p className="text-lg">Subtotal</p>
                  <p>₹{(cart.total * 74.5).toFixed(0)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-lg">Estimated Shipping</p>
                  <p>₹ 100</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-lg">Shipping Discount</p>
                  <p>₹ -43</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl font-Rampart">Total</p>
                  <p className="text-xl font-Rampart">
                    {cart.products.length === 0
                      ? "₹0"
                      : `₹${(cart.total * 74.5 + 100 - 43).toFixed(0)}`}
                  </p>
                </div>
                <div>
                  <NavLink to="/pay">
                    <button className="bg-green-200 p-2 rounded-md hover:bg-green-400">
                      Checkout Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
