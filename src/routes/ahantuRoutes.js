const express = require('express');
const router = express.Router();
const ahantuController = require('../controllers/ahantuController');
const { isAdmin } = require ("../middlewares/authentication");

// Routes for Ahantu items
router.get('/ahantu', ahantuController.getAllAhantu);
router.get('/ahantu/:id',isAdmin, ahantuController.getAhantuById);
router.post('/ahantu', isAdmin, ahantuController.createAhantu);
router.put('/ahantu/:id', isAdmin, ahantuController.updateAhantu);
router.delete('/ahantu/:id', isAdmin, ahantuController.deleteAhantu);

module.exports = router;
