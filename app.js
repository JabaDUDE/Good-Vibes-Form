const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", function (req, res) {
  //TODO:make sure css and bootstrap loads with the files

  res.sendFile(__dirname + "/index.html");
});
//TODO: Set up a page that the form goes to when it is submitted, a 'good vibes submitted' page
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
