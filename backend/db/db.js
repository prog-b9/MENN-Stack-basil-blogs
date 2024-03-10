const mongoose = require("mongoose");

const connectDB = async () => {
  const connect = await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database Is Connection"))
    .catch((error) => console.log("Database Is Not Connection", error));
  return connect;
};

module.exports = connectDB;
