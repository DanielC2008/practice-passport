"use strict";

const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb://localhost:27017/passport-practice';

mongoose.Promise = Promise;

// exporting a function that connects to the database
module.exports.connect = () => mongoose.connect(MONGODB_URL);
