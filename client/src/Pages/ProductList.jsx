import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import Products from "../Components/Products";

const ProductList = () => {
  const params = useParams();
  const cat = params.category;

  const [filters, setFilters] = useState({
    color: "",
    size: "",
  });
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col ml-10 gap-10">
        <h1 className="text-3xl font-semibold  text-blue-400 font-Rampart">
          {cat}
        </h1>
        <div className="flex justify-between flex-wrap gap-5">
          <div className="flex items-center">
            <h1 className="text-xl">Filter Products:</h1>
            <div className="flex gap-1">
              <Box sx={{ minWidth: 90, minHeight: 10, flex: "1 1 auto" }}>
                <FormControl fullWidth>
                  <InputLabel id="color-select-label">Color</InputLabel>
                  <Select
                    labelId="color-select-label"
                    id="color-select"
                    name="color"
                    value={filters.color}
                    label="Color"
                    onChange={handleFilter}
                  >
                    <MenuItem value="White">White</MenuItem>
                    <MenuItem value="Black">Black</MenuItem>
                    <MenuItem value="Red">Red</MenuItem>
                    <MenuItem value="Blue">Blue</MenuItem>
                    <MenuItem value="Yellow">Yellow</MenuItem>
                    <MenuItem value="Green">Green</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ minWidth: 90, minHeight: 10, flex: "1 1 auto" }}>
                <FormControl fullWidth>
                  <InputLabel id="size-select-label">Size</InputLabel>
                  <Select
                    labelId="size-select-label"
                    id="size-select"
                    name="size"
                    value={filters.size}
                    label="Size"
                    onChange={handleFilter}
                  >
                    <MenuItem value="XS">XS</MenuItem>
                    <MenuItem value="S">S</MenuItem>
                    <MenuItem value="M">M</MenuItem>
                    <MenuItem value="L">L</MenuItem>
                    <MenuItem value="XL">XL</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="flex gap-1 items-center mr-8">
            <h1 className="text-xl">Sort Products:</h1>
            <div className="flex gap-1">
              <Box sx={{ minWidth: 90, minHeight: 10 }}>
                <FormControl fullWidth>
                  <InputLabel id="sort-select-label">Newest</InputLabel>
                  <Select
                    labelId="sort-select-label"
                    id="sort-select"
                    label="Sort"
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <MenuItem value="newest">Newest</MenuItem>
                    <MenuItem value="asc">Price (asc)</MenuItem>
                    <MenuItem value="desc">Price (desc)</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex-grow">
        <div className="mb-10">
          <Products cat={cat} filters={filters} sort={sort} />
        </div>
      </div>
      <div className="mt-96">
        <Footer />
      </div>
    </>
  );
};

export default ProductList;
