const express = require('express');
const router = express.Router();
const kunkaController = require('../controllers/kunkacoController');

// Routes for Kunka items
router.get('/kunka', kunkaController.getAllKunka);
router.get('/kunka/:id', kunkaController.getKunkaById);
router.post('/kunka', kunkaController.createKunka);
router.put('/kunka/:id', kunkaController.updateKunka);
router.delete('/kunka/:id', kunkaController.deleteKunka);

module.exports = router;
