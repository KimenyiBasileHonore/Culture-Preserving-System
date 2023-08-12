// routes/indirimboRoutes.js
const express = require('express');
const router = express.Router();
const indirimboController = require('../controllers/indirimboController');
// const { isAdmin } = require("../middlewares/authentication");


router.get('/indirimbo', indirimboController.getAllIndirimbo);
router.get('/indirimbo/:id', indirimboController.getIndirimboById);
router.post('/indirimbo', indirimboController.createIndirimbo);
router.put('/indirimbo/:id', indirimboController.updateIndirimbo);
router.delete('/indirimbo/:id',  indirimboController.deleteIndirimbo);

module.exports = router;
