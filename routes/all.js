var express = require('express')
var router = express.Router()

router.all('/', function (req, res, next) {
    res.send('You can allways see me');
})

module.exports = router;