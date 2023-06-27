import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LeftSidebar from "../component/LeftBar";
import { getProducts } from "../redux/apiCalls";
import { userRequest } from "../utils/axios";

export default function ProductList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const productList = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    handleDelete();
  }, []);
  const handleDelete = async (id) => {
    try {
      await userRequest.delete(`/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full object-cover mr-2"
              src={params.row.image}
              alt=""
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <NavLink to={"/product/" + params.row._id}>
              <button className="bg-green-500 text-white py-1 px-2 rounded-md mr-4">
                Edit
              </button>
            </NavLink>
            <DeleteOutlineIcon
              className="text-red-500 cursor-pointer"
              onClick={(id) => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="flex">
      <LeftSidebar />
      <DataGrid
        rows={productList}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
