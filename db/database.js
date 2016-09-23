"use strict";

const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb://localhost:27017/passport-practice';

mongoose.promise = Promise;

// exporting a function that connects to the database
module.exports = mongoose.connect(MONGODB_URL);
