const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for users
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;