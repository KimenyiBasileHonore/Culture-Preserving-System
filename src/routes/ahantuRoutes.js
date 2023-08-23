const express = require('express');
const router = express.Router();
const ahantuController = require('../controllers/ahantuController');
// const { isAdmin } = require ("../middlewares/authentication");

// Routes for Ahantu items
router.get('/ahantu', ahantuController.getAllAhantu);
router.get('/ahantu/:id', ahantuController.getAhantuById);
router.get('/countTitles', ahantuController.countTitles);
router.post('/ahantu',  ahantuController.createAhantu);
router.put('/ahantu/:id',  ahantuController.updateAhantu);
router.delete('/ahantu/:id',  ahantuController.deleteAhantu);

module.exports = router;
