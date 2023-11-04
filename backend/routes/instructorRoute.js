const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');
//const {getAllinstructors}=require('../controllers/instructorController');
// Define routes for instructors
router.get('/', instructorController.getAllinstructors); //get
router.post('/', instructorController.createInstructor);  //post
router.put('/:instructorId', instructorController.updateInstructor);  //put
router.delete('/:instructorId', instructorController.deleteInstructor); //delete
//router.route("/").get(getAllcourses);
module.exports = router;