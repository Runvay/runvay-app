import mongoose, { Document } from "mongoose";

interface Profile extends Document {
  user: { type: mongoose.Schema.Types.ObjectId; ref: "User"; required: true };
  email: { type: string };
  phoneNumber: { type: string; required: true };
  shippingAddress: {
    street: { type: string };
    city: { type: string };
    zip: { type: string };
    country: { type: string };
  };
  orders: mongoose.Types.ObjectId[];
}

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  email: { type: String },
  phoneNumber: { type: String, default: "" },
  shippingAddress: {
    street: { type: String, default: "" },
    city: { type: String, default: "" },
    zip: { type: String, default: "" },
    country: { type: String, default: "" },
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);
export default Profile;
