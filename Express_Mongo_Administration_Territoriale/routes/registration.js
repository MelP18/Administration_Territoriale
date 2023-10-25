var express = require('express');
var router = express.Router();

const registrationController = require('../controllers/registration.controller')

router.post('/signup', registrationController.registration);
router.post('/signin', registrationController.connection);

module.exports=router