import { Schema, model, models } from "mongoose";

const User = new Schema(
  {
    id: Number,
    name: {
      type: String,
      requires: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default models.User || model("User", User);
