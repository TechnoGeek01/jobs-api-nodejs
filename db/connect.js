const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    dbName: "job-search",
  });
};

module.exports = connectDB;
