import { Box, Stack } from "@chakra-ui/react";
import { publicRequest } from "../utils/axios";
import Card from "../Components/Card";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Pay = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const data = user.currentUser.userData;
  const firstname = user.currentUser.userData.firstname;
  const lastname = user.currentUser.userData.lastname;

  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await publicRequest.get("/getkey");
    const {
      data: { order },
    } = await publicRequest.post("/checkout/payment", {
      amount,
    });

    const options = {
      key,
      amount: (cart.total * 74.5 * 100 + 100 - 43).toFixed(0),
      currency: "INR",
      name: "SHOPIFY",
      description: "Transaction",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
      order_id: order.id,
      callback_url: "https://shopify-h4ak.onrender.com/api/checkout/paymentverification",
      prefill: {
        name: `${firstname} ${lastname}`,
        email: data.email,
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavLink to="/">
        <Typography variant="body1" align="center" marginTop={20}>
          Back To Homepage
        </Typography>
      </NavLink>
      <Stack
        height="100vh"
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card
          amount={(cart.total * 74.5 + 100 - 43).toFixed(0)}
          img="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </div>
  );
};

export default Pay;
