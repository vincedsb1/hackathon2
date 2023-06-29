const express = require('express');

const apiController = require('../controllers/api.controller');

const router = express.Router();

// Endpoint for getting all the records
router.get('/', apiController.getUsers);

// Endpoint for creating a new record
router.post('/new', apiController.addUser);

// Endpoint for getting a single record by email
router.get('/:email', apiController.retrieveUserByEmail);

// Endpoints for updating/deleting a record
router.route('/:id').put(apiController.updateUser).delete(apiController.deleteUser);

module.exports = router;
