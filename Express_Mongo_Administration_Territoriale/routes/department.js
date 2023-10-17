var express = require('express');
var router = express.Router();

const departementController = require('../controllers/department.controller')

router.get('/', departementController.getAllDepartmnt);
router.get('/:id', departementController.getDepartmentSpecifiq)
router.post('/post', departementController.setDepartment);
router.put('/update/:name', departementController.updateDepartment);
router.delete('/delete/:name', departementController.deleteDepartment);

module.exports=router