var express = require('express');
var router = express.Router();

const districtController = require('../controllers/district.controller')

router.post('/post',districtController.setDistrict);
router.get('/', districtController.getAllDistrict);
router.put('/update/:name', districtController.updateDistrict);
router.delete('/delete/:name', districtController.deleteDistrict)

module.exports = router;