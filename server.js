const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const userRoute = require("./routes/userRoute");

app.use("/user", userRoute);

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});

app.get("/", (req, res) => {
  res.send(
    "This is nodejs project for authentication & authorization purpose based on JWT. How JWT (JSON Web Token works.)"
  );
});
