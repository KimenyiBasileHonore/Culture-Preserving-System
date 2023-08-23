const express = require('express');
const router = express.Router();
const inkaController = require('../controllers/inkacoController');
// const { isAdmin } = require('../middlewares/authentication');

// Routes for Inka items
router.get('/inka', inkaController.getAllInka);
router.get('/inka/:id', inkaController.getInkaById);
router.post('/inka',inkaController.createInka);
router.put('/inka/:id', inkaController.updateInka);
router.delete('/inka/:id', inkaController.deleteInka);
router.get('/countTitles', inkaController.countTitles);

module.exports = router;
