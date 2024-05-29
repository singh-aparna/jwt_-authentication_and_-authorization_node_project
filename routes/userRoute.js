const express = require("express");
//importing express module
const router = express.Router();
//This line creates a new router object by calling express.Router().
//Routers in Express are used to handle routes for different parts of the application separately.
const User = require("../models/User");
//This line imports the User model, which is presumably defined in a file located at ../models/User.
//The User model is likely a Mongoose model used to interact with a MongoDB collection.
router.get("/", async (req, res) => {
  //This defines a route handler for GET requests to the root URL ("/") of this router.
  //The handler function is asynchronous, allowing the use of await for asynchronous operations.
  try {
    //This starts a try block to handle potential errors that might occur during the execution of the code inside it.
    const data = await User.find();
    //This line fetches all documents from the User collection in the database.
    //The await keyword ensures that the function waits for the database query to complete before proceeding.
    console.log("Data fetched", data);
    res.status(200).json(data);
    //This sends a response with status code 200 (OK) and the fetched data in JSON format to the client.
  } catch (err) {
    //This starts a catch block to handle any errors that might have occurred in the try block.
    console.log(err);
    res.status(500).json({ err: "Internal server error." });
    //This sends a response with status code 500 (Internal Server Error) and a JSON object containing an error message to the client.
  }
});

router.post("/", async (req, res) => {
  //This defines a route handler for POST requests to the root URL ("/") of this router.
  //The handler function is asynchronous, allowing the use of await for asynchronous operations.
  try {
    //This starts a try block to handle potential errors that might occur during the execution of the code inside it.
    const data = req.body;
    //This line extracts the data sent in the request body. This data is expected to contain the new user information to be saved.

    const newUser = new User(data);
    //This creates a new instance of the User model using the data from the request body.
    const response = await newUser.save();
    //This line saves the new user to the database.
    //The await keyword ensures that the function waits for the save operation to complete before proceeding.
    console.log("Data saved", response);
    //This logs the response from the save operation to the console for debugging purposes.
    res.status(200).json(response);
    //This sends a response with status code 200 (OK) and the saved user data in JSON format to the client.
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server error." });
    //This sends a response with status code 500 (Internal Server Error) and a JSON object containing an error message to the client.
  }
});

module.exports = router;
//This line exports the router object so it can be used in other parts of the application.
//This allows you to import this router in your main application file and use it to handle requests to the routes defined in this router.
