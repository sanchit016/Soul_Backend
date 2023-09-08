const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL, { dbName: "Soul" })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err);
    });
};

module.exports = connectDB;
