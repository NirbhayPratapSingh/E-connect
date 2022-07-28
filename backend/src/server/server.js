const mongoose = require("mongoose");

const Connection = mongoose.connect("mongodb://localhost:27017/econnect");

module.exports = Connection;
