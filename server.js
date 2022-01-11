require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

let responseObj = {};
app.enable("trust proxy");
app.get("/api/whoami",(req,res) => {
  responseObj["ipaddress"] = req.ip;
  responseObj["language"] = req.get("Accept-language");
  responseObj["software"] = req.get("User-Agent");
  res.json(responseObj);
})