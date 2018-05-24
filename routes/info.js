var express = require('express');
var router = express.Router()

router.param('id', function (req, res, next, id) {
    console.log(req.params)
    if (req.params.id === 'jiangruyi') {
        next()
    } else {
        res.sendStatus(404)
    }
})

router.param('num', function (req, res, next, num) {
    if (req.params.num === '1') {
        next()
    } else {
        res.send('地址错啦')
    }
})

router.get('/name/:id/:num', function (req, res, next) {
    res.send('姓名：蒋如意')
});

router.get('/getjson', function (req, res, next) {
    let retData = {
        name: '蒋如意',
        age: '27'
    }
    res.json(retData)
})

router.get('/viewdirectory', require('./mymiddleware.js'))

// next()串连各个中间件 --start--
router.get('/gethtml', function (req, res, next) {
    res.locals.name = '蒋大帅'
    // res.render('./layout.jade')
    next()
})
router.get('/gethtml', function (req, res, next) {
    res.render('./layout.jade')
})
// --end--
router.all('/name', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});

module.exports = router;