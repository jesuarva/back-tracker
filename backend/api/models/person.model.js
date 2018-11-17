const mongoose = require('mongoose');

const passengerBagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      'This field is required, We would love to know your name.',
    ],
  },
  bags: {
    type: Number,
    required: [true, 'This field is required, How many bags travel with you?'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email address is required'],
    validate: {
      validator: (val) =>
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
          val,
        ),
      message: '{VALUE} is not a valid email address',
    },
  },
});

module.exports = mongoose.model('Passenger-Bags', passengerBagSchema);
