const express = require('express');
const router = express.Router();
const imiganimiremireController = require('../controllers/imiganimiremireController');
// const { isAdmin } = require("../middlewares/authentication");


router.get('/imiganimiremire', imiganimiremireController.getAllImiganimiremire);
router.get('/imiganimiremire/:id',  imiganimiremireController.getImiganimiremireById); 
router.post('/imiganimiremire', imiganimiremireController.createImiganimiremire);
router.put('/imiganimiremire/:id', imiganimiremireController.updateImiganimiremire);
router.delete('/imiganimiremire/:id', imiganimiremireController.deleteImiganimiremire);
router.get("/countTitles", imiganimiremireController.countTitles);

module.exports = router;
