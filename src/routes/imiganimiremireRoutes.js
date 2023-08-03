const express = require('express');
const router = express.Router();
const imiganimiremireController = require('../controllers/imiganimiremireController');
const { isAdmin } = require("../middlewares/authentication");


// Route to get all imiganimiremire
router.get('/imiganimiremire', imiganimiremireController.getAllImiganimiremire);
router.get('/imiganimiremire/:id', isAdmin, imiganimiremireController.getImiganimiremireById); 

// Route to create a new imiganimiremire
router.post('/imiganimiremire', isAdmin,imiganimiremireController.createImiganimiremire);

// Route to update a imiganimiremire
router.put('/imiganimiremire/:id', isAdmin,imiganimiremireController.updateImiganimiremire);

// Route to delete a imiganimiremire
router.delete('/imiganimiremire/:id', isAdmin, imiganimiremireController.deleteImiganimiremire);

module.exports = router;
