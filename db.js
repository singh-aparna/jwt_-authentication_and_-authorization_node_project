const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGODB_URL_LOCAL;
mongoose.connect(mongoURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to mongodb server.");
});
db.on("disconnected", () => {
  console.log("Disconnected.");
});
db.on("error", (err) => {
  console.log("Mongodb connection error", err);
});
module.exports = db;
