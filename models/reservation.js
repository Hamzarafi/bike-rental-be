import { model } from "mongoose";

const reservationSchema = new Schema(
  {
    bikeId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    dateFrom: {
      type: Date,
      required: true,
    },
    dateTo: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Reserve = model("reservation", reservationSchema);

export default Reserve;
