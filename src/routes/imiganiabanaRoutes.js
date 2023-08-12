// routes/imiganiabanaRoutes.js
const express = require('express');
const router = express.Router();
const imiganiabanaController = require('../controllers/imiganiabanaController');
// const { isAdmin } = require("../middlewares/authentication");

// Get all Imiganiabana
router.get('/imiganiabana', imiganiabanaController.getAllImiganiabana);

// Get a single Imiganiabana by ID
router.get('/imiganiabana/:id', imiganiabanaController.getImiganiabanaById);

// Create a new Imiganiabana
router.post('/imiganiabana', imiganiabanaController.createImiganiabana);

// Update an existing Imiganiabana
router.put('/imiganiabana/:id', imiganiabanaController.updateImiganiabana);

// Delete an Imiganiabana
router.delete('/imiganiabana/:id', imiganiabanaController.deleteImiganiabana);

module.exports = router;
