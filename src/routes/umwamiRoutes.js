const express = require('express');
const router = express.Router();
const umwamiController = require('../controllers/umwamiController');
const { isAdmin } = require('../middlewares/authentication');

// Routes for Umwami items
router.get('/umwami', umwamiController.getAllUmwami);
router.get('/umwami/:id',isAdmin, umwamiController.getUmwamiById);
router.post('/umwami',isAdmin, umwamiController.createUmwami);
router.put('/umwami/:id',isAdmin, umwamiController.updateUmwami);
router.delete('/umwami/:id',isAdmin, umwamiController.deleteUmwami);

module.exports = router;
