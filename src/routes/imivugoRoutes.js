// routes/imivugoRoutes.js

const express = require('express');
const router = express.Router();
const imivugoController = require('../controllers/imivugoController');
// const { isAdmin } = require("../middlewares/authentication");


// GET route to fetch all Imivugo data
router.get('/imivugo', imivugoController.getAllImivugo);

// POST route to create new Imivugo data
router.post('/imivugo',  imivugoController.createImivugo);

// GET route to fetch a specific Imivugo by ID
router.get('/imivugo/:id', imivugoController.getImivugoById);

// PUT route to update an existing Imivugo
router.put('/imivugo/:id', imivugoController.updateImivugo);

// DELETE route to delete an Imivugo by ID
router.delete('/imivugo/:id', imivugoController.deleteImivugo);

module.exports = router;
