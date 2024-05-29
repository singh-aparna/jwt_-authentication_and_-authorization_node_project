const express = require("express");
//imports the Express module, a popular web framework for Node.js, simplifies the process of creating web servers and APIs.
const app = express();
//creates an instance of an Express application. This app object is used to define routes and middleware, and to configure the server.
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//Importing the router files
const userRoute = require("./routes/userRoute");
//Used the router
app.use("/user", userRoute);

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});
//This line tells the app to listen for incoming connections on port 3000.
//The listen method takes two arguments: the port number and a callback function that runs once the server starts listening.

app.get("/", (req, res) => {
  res.send(
    "This is nodejs project for authentication & authorization purpose based on JWT. How JWT (JSON Web Token works.)"
  );
});
//This line sets up a route handler for HTTP GET requests to the root URL ("/").
//The app.get method takes two arguments: the route path and a callback function to handle the request.
//Inside the route handler callback, res.send is used to send a response back to the client. When a GET request is made to the root URL,
//this line sends a plain text message to the client's browser explaining the project's purpose.


//Summary-
// Import Express: Import the Express module to create a web server.
// Create App Instance: Initialize an Express application.
// Start Server: Start the server on port 3000 and log status messages.
// Define Route: Create a route for the root URL that sends a message to the client.
