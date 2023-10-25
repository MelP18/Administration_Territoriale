var express = require('express');
var router = express.Router();

//var auth = require('../middleware/essai.middleware')
/* GET users listing. */
router.post('/',  function(req, res, next) {
    
    res.send('respond with a resource');

});

module.exports = router;
