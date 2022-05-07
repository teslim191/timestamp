const express = require('express')
const router = express.Router()



router.get('/:date?', (req, res) => {
    const date_parse = Date.parse(req.params.date)
    const regexp2 = /^(\d{0,})?$/;
  
     let date = new Date(date_parse)
    if (isNaN(date_parse) == false && req.params.date) {
      res.json({"unix": date.getTime(), "utc": date.toUTCString()})
    }
    else if (isNaN(date_parse)==true && !regexp2.test(req.params.date) && req.params.date) {
      res.json({error:"Invalid Date" })
    }
    else if (regexp2.test(req.params.date) && req.params.date) {
      date = new Date(Number(req.params.date));
      res.json({"unix": date.getTime(), "utc": date.toUTCString()})
    }
    else if (!date_parse){
      current_date = new Date()
      res.json({"unix": current_date.getTime(), "utc": current_date.toString()})
     
    }
  })

module.exports = router