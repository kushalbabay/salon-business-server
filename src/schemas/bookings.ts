import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  salonId: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  bookingTime: {
    type: String,
    required: true,
  },
  services: {
    type: Array, // lookup
    required: true,
  },
  status: {
    type: Number, // Enum
  },
});
