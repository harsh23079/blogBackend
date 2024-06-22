const mongoose = require("mongoose");
require("dotenv").config();
const DatabaseConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => console.log(err.message));
};
module.exports = DatabaseConnection;
