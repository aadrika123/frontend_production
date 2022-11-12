// successfull react serve working code for react
const path = require("path");
const express = require("express");
const app = express(); // create express app

console.log('before hitt')
//home route will redirect to the citizen-pannel route
app.get("/", (req, res) => {
 console.log('home route hitted')
 res.redirect('/citizen')
});

//middleware to server static files also
app.use(express.static("citizen_build"));
app.use(express.static("admin_build"));
app.use(express.static("citizen_mb_build"));

//actual routes
app.get("/citizen", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_build", "index.html"));
});
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin_build", "index.html"));
});
app.get("/citizen-mb", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_mb_build", "index.html"));
});

// start express server on port 82
app.listen(80, () => {
  console.log("server started on port 82");
});