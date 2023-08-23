// routes/imiganiabanaRoutes.js
const express = require('express');
const router = express.Router();
const imiganiabanaController = require('../controllers/imiganiabanaController');
// const { isAdmin } = require("../middlewares/authentication");

router.get('/imiganiabana', imiganiabanaController.getAllImiganiabana);
router.get('/imiganiabana/:id', imiganiabanaController.getImiganiabanaById);
router.post('/imiganiabana', imiganiabanaController.createImiganiabana);
router.put('/imiganiabana/:id', imiganiabanaController.updateImiganiabana);
router.delete('/imiganiabana/:id', imiganiabanaController.deleteImiganiabana);
router.get('/countTitles', imiganiabanaController.countTitles);

module.exports = router;
