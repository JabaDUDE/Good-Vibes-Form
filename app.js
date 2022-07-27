const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", function (req, res) {
  //TODO:make sure css and bootstrap loads with the files

  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    //TODO: app crashed in nodemon due to whatever is happening here...
    const request = https.request( function(response){

        if (response.statusCode === 200){
          res.sendFile(__dirname + '/vibe-sucess.html')
        }else{
          res.sendFile(__dirname + '/vibe-fail.html')
        }
         
})
//TODO: Set up a page that the form goes to when it is submitted, a 'good vibes submitted' page
app.listen(process.env.PORT || 5000, function () {
  console.log("This server is running on port 5000");
});
