var express = require('express');
var router = express.Router();

const municipalityController = require('../controllers/municipality.controller')

router.post('/post', municipalityController.setMunicipality);
router.get('/', municipalityController.getAllMunicipality);
router.get('/:name',municipalityController.getDepartmentSpecifiqMunicipality);
router.get('/munic/:namemunic', municipalityController.getMuniSpecifiq);
router.put('/update/:name', municipalityController.updateMunicipality);
router.delete('/delete/:name', municipalityController.deleteMunicipality);

module.exports = router;