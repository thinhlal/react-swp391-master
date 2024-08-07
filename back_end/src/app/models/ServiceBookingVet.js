const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceBookingVetSchema = new Schema(
  {
    serviceBookingVetID: {
      type: Number,
      unique: true,
    },
    doctorID: {
      type: String,
      default: '',
      ref: 'Doctor',
    },
    bookingID: {
      type: String,
      required: true,
      ref: 'Booking',
    },
    serviceID: {
      type: String,
      required: true,
      ref: 'Service',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('ServiceBookingVet', ServiceBookingVetSchema);
