import { VStack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Card = ({ amount, img, checkoutHandler }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <VStack>
      <Image src={img} boxSize={"64"} objectFit="cover" />
      <Text>₹{(cart.total * 74.5).toFixed(0)}</Text>
      <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
    </VStack>
  );
};

export default Card;
