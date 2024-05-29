const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    console.log("Data fetched", data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server error." });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User(data);
    const response = await newUser.save();
    console.log("Data saved", response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server error." });
  }
});

module.exports = router;
