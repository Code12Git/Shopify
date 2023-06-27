import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  position: relative;
`;

const ImageSlider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 500px; /* Update the height here */
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  font-family: Roboto, "Helvetica";
`;

const Title = styled.h2`
  font-size: 44px;
  margin-bottom: 10px;
  color: white;
  font-family: monospace;
`;

const Description = styled.p`
  font-size: 24px;
  line-height: 1.5;
  font-family: monospace;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;
  z-index: 2;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

const Slider = () => {
  const sliderItems = [
    {
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=1800",
      title: "AUTUMN COLLECTION",
      description:
        "DON'T COMPROMISE ON STYLE! GET FLAT 25% OFF FOR NEW ARRIVALS.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "SUMMER SALE",
      description:
        "DON'T COMPROMISE ON STYLE! GET FLAT 25% OFF FOR NEW ARRIVALS.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605086998852-18371cfd9b2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: "END OF SEASON SALE",
      description:
        "DON'T COMPROMISE ON STYLE! PURCHASE NEW ARRIVALS ON CHEAPER PRICE",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage > 0 ? prevImage - 1 : sliderItems.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage < sliderItems.length - 1 ? prevImage + 1 : 0
    );
  };

  useEffect(() => {
    const autoplayInterval = setInterval(handleNextImage, 3000); // Auto play every 3 seconds
    return () => clearInterval(autoplayInterval); // Clear the interval on unmount
  }, []);

  const currentItem = sliderItems[currentImage];

  return (
    <Container>
      <LeftArrow onClick={handlePrevImage}>&#8249;</LeftArrow>
      <ImageSlider>
        <Image src={currentItem.image} alt="Slider Image" />
        <Overlay>
          <Title>{currentItem.title}</Title>
          <Description>{currentItem.description}</Description>
          <NavLink to="/products/Men's Fashion">
            {" "}
            <Button>Shop Now</Button>
          </NavLink>
        </Overlay>
      </ImageSlider>
      <RightArrow onClick={handleNextImage}>&#8250;</RightArrow>
    </Container>
  );
};

export default Slider;
