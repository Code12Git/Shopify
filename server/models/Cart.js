import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		products: [
			{
				productId: {
					type: String,
				},
				quantity: {
					type: Number,
					},
			},
		],
	},
	{ timestamps: true }
);

const Cart = new mongoose.model("cart", cartSchema);

export default Cart;
