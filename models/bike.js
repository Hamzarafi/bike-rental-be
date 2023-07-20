import { model } from "mongoose";

const bikeSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    availableForRental: {
      type: Boolean,
      required: true,
    },
    rating: {
      type: [Number],
      default: [],
    },
  },
  { timestamps: true }
);

const Bike = model("Bike", bikeSchema);

export default Bike;
