var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

let currentValue = ''

router.post('/infolist', function (req, res, next) {
  console.log(req.get('Content-type'))
  console.log(req.signedCookies)
  console.log(req.param('name'))
  console.log(req.params, req.body, req.query)
  console.log(req.acceptsLanguages('france'))
  currentValue = req.query.name
  let response = {
    key: currentValue
  }
  res.cookie('agin', 'zhangyao', {
    signed: true,
    maxAge: 60000000,
    httpOnly: true,
    path: '/'
  })
  res.set({
    'Content-type': 'text/plain',
    'Content-Length': '123',
    'ETag': '123456'
  })
  res.type('json')
  // res.clearCookie('agin')
  res.end(JSON.stringify(response))
})

router.get('/value', function (req, res, next) {
  res.send(currentValue)
})

module.exports = router;
