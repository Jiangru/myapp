var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

let currentValue = ''

router.post('/infolist', function (req, res, next) {
  console.log(req.baseUrl, req.path, req.originalUrl)
  currentValue = req.query.name
  let response = {
    key: 'req'
  }
  res.end(JSON.stringify(response))
})

router.get('/value', function (req, res, next) {
  res.send(currentValue)
})

module.exports = router;
