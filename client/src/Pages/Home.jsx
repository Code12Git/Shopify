import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import CategoryItem from "../Components/CategoryItem";

import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <CategoryItem />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
