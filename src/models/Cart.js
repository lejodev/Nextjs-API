import { Mongoose, Schema, model, models } from "mongoose";

const Cart = new Schema(
  {
    id: Number,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    bikeIds: [{ type: Schema.Types.ObjectId, ref: "Bike", required: true }],
    purchased: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default models.Cart || model("Cart", Cart);
