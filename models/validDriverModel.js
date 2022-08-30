const mongoose = require('mongoose');
const validator = require('validator');

const driverSchema = new mongoose.Schema(
  {
    driverName: {
      type: String,
      require: [true, 'Please enter Driver Name'],
    },
    NID: {
      type: String,
      require: [true, 'Please enter NID'],
    },
    currentAddress: {
      type: String,
      require: [true, 'Please enter Driver Name'],
    },
    permanentAddress: {
      type: String,
      require: [true, 'Please enter Driver Name'],
    },
    licenseNo: {
      type: String,
      require: [true, 'Please provide License Number'],
      unique: true,
    },
    added: Boolean,
    phone: {
      type: String,
      required: [true, 'Please Enter Your Phone'],
      maxlength: [
        11,
        'Phone Number cannot exceed 11 digits, exclude +88 if provided',
      ],
      minlength: [11, 'Phone number cannot be less than 11 digits'],
      unique: false,
      validate: {
        validator: function (arr) {
          return !isNaN(arr);
        },
        message: 'Please Enter a valid Phone Number',
      },
    },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: 'busOwner',
    },
  },
  { collection: 'validdriver' }
);

module.exports = mongoose.model('ValidDriver', driverSchema);
