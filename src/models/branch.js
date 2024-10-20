import mongoose, { Schema } from "mongoose";

const branchSchema = new Schema({
  name: { type: String, required: true },
  location: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  address: { type: String },
  deliveryPartners: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryPartner",
    },
  ],
});

const Branch = mongoose.model("Branch", branchSchema);
export default Branch;
