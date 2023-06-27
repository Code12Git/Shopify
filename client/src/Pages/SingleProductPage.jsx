import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { publicRequest } from "../utils/axios";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct, emptyCart } from "../redux/cartRedux";
import { removeProduct } from "../redux/cartRedux";
import { increaseQuantity } from "../redux/cartRedux";
import { decreaseQuantity } from "../redux/cartRedux";
import styled from "styled-components";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await publicRequest.get(`/products/${params.id}`);
      setProduct(res.data);
    };
    fetchData();
  }, [params.id]);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-5 ml-5 mt-8">
        <React.Fragment key={product._id}>
          <div className="w-full md:w-96 h-96">
            <img
              src={product.image}
              alt="shirt"
              style={{ width: "100%", height: "100%" }}
              className="md:h-50 rounded-lg md:w-50 lg:w-50 transition duration-500 ease-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2x object-contain md:w-auto md:h-auto md:max-w-md"
            />
          </div>
          <div className="flex flex-col gap-4 md:w-full ml-20">
            <h1 className="text-4xl text-slate-500">{product.title}</h1>
            <p className="font-Playfair">{product.description}</p>
            <p className="text-4xl text-blue-400">
              ₹ {(product.price * 74.5).toFixed(0)}
            </p>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex items-center gap-2">
                <p className="text-xl text-slate-500">Color:</p>
                {product.color?.map((c) => (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xl text-slate-500">Size:</p>
                <select
                  className="px-4 py-2 border border-blue-400 rounded-md"
                  value={size}
                  onChange={handleSizeChange}
                >
                  {product.size?.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-14 items-center">
              <div className="flex gap-1 items-center">
                <button
                  className="p-1 bg-blue-200 rounded-md"
                  onClick={() => handleQuantity("dec")}
                >
                  <RemoveIcon />
                </button>
                <p className="border border-blue-200 rounded-md px-2">
                  {quantity}
                </p>
                <button
                  className="p-1 bg-blue-200 rounded-md"
                  onClick={() => handleQuantity("inc")}
                >
                  <AddIcon />
                </button>
              </div>
              <div className="flex gap-5 flex-wrap">
                <button
                  onClick={handleClick}
                  className="bg-blue-200 p-3 rounded-md text-black hover:bg-blue-400 font-serif"
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => dispatch(removeProduct(product))}
                  className="bg-blue-200 p-3 rounded-md text-black hover:bg-blue-400 font-serif"
                >
                  Remove From Cart
                </button>
                <button
                  onClick={() => dispatch(emptyCart())}
                  className="bg-blue-200 p-3 rounded-md text-black hover:bg-blue-400 font-serif"
                >
                  Empty Cart
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export default SingleProductPage;
