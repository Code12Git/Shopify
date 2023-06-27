import React, { useEffect, useState } from "react";
import { userRequest } from "../utils/axios";

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  const Button = ({ type }) => {
    return (
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded ${
          type === "Approved"
            ? "bg-green-500"
            : type === "Declined"
            ? "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {type}
      </button>
    );
  };

  return (
    <div className="w-1/2 mt-8">
      <h3 className="text-2xl font-bold mb-4">Latest transactions</h3>
      <table className="w-full">
        <tr className="border-b">
          <th className="py-2 px-4 text-left">Customer</th>
          <th className="py-2 px-4 text-left">Date</th>
          <th className="py-2 px-4 text-left">Amount</th>
          <th className="py-2 px-4 text-left">Status</th>
        </tr>
        {orders.map((order) => {
          return (
            <tr className="border-b" key={order._id}>
              <td className="py-2 px-4 flex items-center">
                <img
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="w-10 h-10 rounded-full mr-4"
                />
                <span className="font-medium">{order.userId}</span>
              </td>
              <td className="py-2 px-4">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="py-2 px-4">${order.amount}</td>
              <td className="py-2 px-4">
                <Button type={order.status} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WidgetLg;
