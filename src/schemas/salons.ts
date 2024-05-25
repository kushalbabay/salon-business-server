import mongoose from "mongoose";

const salonSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  orgCode: {
    type: String,
    unique: true,
  },
  address: {
    type: String, // TBD - lat & long (Number)
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  servicesOffered: {
    type: Array, // TBD - Enum for services, list for service items
    required: true,
  },
});
