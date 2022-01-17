const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const users = require("./routes/user");

//intialize express server instamce
const app = express();

//middlewares
app.use(express.json());
app.use(fileUpload());
app.use(express.static("uploads"));
app.use("/api/v1/users", users);
// connect to the mongodb

mongoose.connect("mongodb://localhost/user_db", (err, db) => {
  if (err) {
    console.error(err);
  } else {
    console.log("connection build successfully");
  }
});

//listen on port

app.listen(4000, () => {
  console.log("server running at port 4000");
});
