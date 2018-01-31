var express = require('express');
var router = express.Router()

router.get('/name', function (req, res, next) {
    res.send('姓名：蒋如意')
});

router.all('/name', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});

module.exports = router;