const express = require('express');
const router = express.Router();
const umwamiController = require('../controllers/umwamiController');
// const { isAdmin } = require('../middlewares/authentication');

// Routes for Umwami items
router.get('/umwami', umwamiController.getAllUmwami);
router.get('/umwami/:id', umwamiController.getUmwamiById);
router.post('/umwami', umwamiController.createUmwami);
router.put('/umwami/:id', umwamiController.updateUmwami);
router.delete('/delumwami/:id', umwamiController.deleteUmwami);


module.exports = router;
