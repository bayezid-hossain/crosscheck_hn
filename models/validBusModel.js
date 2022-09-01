const mongoose = require('mongoose');
const validator = require('validator');

const busSchema = new mongoose.Schema(
  {
    ownerName: String,
    email: String,
    busNo: String,
    engNo: String,
    ac: Boolean,
    added: Boolean,
    address: String,
    phone: String,
    seatNumber: Number,
  },
  { collection: 'validbus' }
);

module.exports = mongoose.model('ValidBus', busSchema);
