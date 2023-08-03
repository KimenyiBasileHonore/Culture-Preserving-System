// routes/imiganiabanaRoutes.js
const express = require('express');
const router = express.Router();
const imiganiabanaController = require('../controllers/imiganiabanaController');
const { isAdmin } = require("../middlewares/authentication");

// Get all Imiganiabana
router.get('/imiganiabana', imiganiabanaController.getAllImiganiabana);

// Get a single Imiganiabana by ID
router.get('/imiganiabana/:id',isAdmin , imiganiabanaController.getImiganiabanaById);

// Create a new Imiganiabana
router.post('/imiganiabana',isAdmin , imiganiabanaController.createImiganiabana);

// Update an existing Imiganiabana
router.put('/imiganiabana/:id',isAdmin , imiganiabanaController.updateImiganiabana);

// Delete an Imiganiabana
router.delete('/imiganiabana/:id',isAdmin , imiganiabanaController.deleteImiganiabana);

module.exports = router;
