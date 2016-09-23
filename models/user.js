"use strict";

const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
})

