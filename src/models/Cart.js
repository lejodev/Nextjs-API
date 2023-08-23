import { Mongoose, Schema, model, models } from "mongoose";

const Cart = new Schema(
  {
    id: Number,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    bikeId: { type: Schema.Types.ObjectId, ref: "Bike", required: true },
    amount: Number,
  },
  { timestamps: true }
);

export default models.Cart || model("Cart", Cart);
