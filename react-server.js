// successfull react serve working code for react
const path = require("path");
const express = require("express");
const app = express(); // create express app
// add middleware
// app.use(express.static("build2"));

// app.use(express.static("build1"));

console.log('before hitt')
app.get("/", (req, res) => {
 console.log('home route hitted')
 res.redirect('/citizen-pannel')
});
app.use(express.static("cp_build"));
app.use(express.static("swm_build"));
app.get("/citizen-pannel", (req, res) => {
  res.sendFile(path.join(__dirname, "cp_build", "index.html"));
});
app.get("/swm", (req, res) => {
  res.sendFile(path.join(__dirname, "swm_build", "index.html"));
});

// app.get('/', function (req, res) {
//  res.redirect('/citizen-pannel')
// })
// app.get('*', function (req, res) {
//  res.redirect('/citizen-pannel')
// })


// start express server on port 5000
app.listen(82, () => {
  console.log("server started on port 82");
});