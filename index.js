// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

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



// app.get("/api/:date?", (req, res) => {
//   const date = new Date(req.params.date)
//   res.json({"unix":date.getTime(), "utc": date.toUTCString()})
// })

// app.get("/api/:unixdate", (req, res)=>{
//   let unix_date = new Date(req.params.unixdate).getTime()
//   console.log(unix_date)
  // let date = new Date(unix_date)
  // res.json({"unix": unix_date, "utc": date.toUTCString()})
// })

app.get('/api/:date?', (req, res) => {
  const date_parse = Date.parse(req.params.date)
  const regexp2 = /^(\d{0,})?$/;

   let date = new Date(date_parse)
  if (isNaN(date_parse) == false && req.params.date) {
    res.json({"unix": date.getTime(), "utc": date.toString()})
  }
  else if (!isNaN(date_parse)==true && !regexp2.test(req.params.date) && req.params.date) {
    res.json({error:"Invalid Date" })
  }
  else if (regexp2.test(req.params.date) && req.params.date) {
    date = new Date(Number(req.params.date));
    res.json({"unix": date.getTime(), "utc": date.toString()})
  }
  else if (!date_parse){
    current_date = new Date()
    res.json({"unix": current_date.getTime(), "utc": current_date.toString()})
   
  }
})


// listen for requests :)
var listener = app.listen(9000, function () {
  console.log('Your app is listening on port 9000');
});

