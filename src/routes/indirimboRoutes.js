// routes/indirimboRoutes.js
const express = require('express');
const router = express.Router();
const indirimboController = require('../controllers/indirimboController');
const { isAdmin } = require("../middlewares/authentication");


router.get('/indirimbo', indirimboController.getAllIndirimbo);
router.get('/indirimbo/:id',isAdmin, indirimboController.getIndirimboById);
router.post('/indirimbo',isAdmin, indirimboController.createIndirimbo);
router.put('/indirimbo/:id',isAdmin, indirimboController.updateIndirimbo);
router.delete('/indirimbo/:id', isAdmin, indirimboController.deleteIndirimbo);

module.exports = router;
