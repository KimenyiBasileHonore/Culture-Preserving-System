// routes/imivugoRoutes.js

const express = require('express');
const router = express.Router();
const imivugoController = require('../controllers/imivugoController');
// const { isAdmin } = require("../middlewares/authentication");


router.get('/imivugo', imivugoController.getAllImivugo);
router.post('/imivugo',  imivugoController.createImivugo);
router.get('/imivugo/:id', imivugoController.getImivugoById);
router.put('/imivugo/:id', imivugoController.updateImivugo);
router.delete('/imivugo/:id', imivugoController.deleteImivugo);
router.get('/countTitles', imivugoController.countTitles);

module.exports = router;
