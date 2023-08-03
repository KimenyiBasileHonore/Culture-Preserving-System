const express = require('express');
const router = express.Router();
const inkaController = require('../controllers/inkacoController');
const { isAdmin } = require('../middlewares/authentication');

// Routes for Inka items
router.get('/inka', inkaController.getAllInka);
router.get('/inka/:id',isAdmin, inkaController.getInkaById);
router.post('/inka', isAdmin,inkaController.createInka);
router.put('/inka/:id',isAdmin, inkaController.updateInka);
router.delete('/inka/:id',isAdmin, inkaController.deleteInka);

module.exports = router;
