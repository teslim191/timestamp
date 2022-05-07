// index.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

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
// app.get("/api/hello", function (req, res) {
//   res.json({greeting: 'hello API'});
// });



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

app.use('/api', require('./routes/api'))

// listen for requests :)
const PORT = process.env.PORT || 9000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



