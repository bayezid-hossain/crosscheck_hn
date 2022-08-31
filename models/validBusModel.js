const mongoose = require('mongoose');
const validator = require('validator');

const busSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      require: [true, 'Please enter Driver Name'],
    },
    email: String,
    busNo: Number,
    engNo: Number,
    ac: Boolean,
    added: Boolean,
    address: String,
    phone: String,
    seatNumber: Number,
  },
  { collection: 'validbus' }
);

module.exports = mongoose.model('ValidBus', busSchema);
