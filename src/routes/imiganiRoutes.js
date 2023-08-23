// routes/imiganiRoutes.js
const express = require('express');
const router = express.Router();
const imiganiController = require('../controllers/imiganiController');
// const { isAdmin } = require('../middlewares/authentication')

router.get('/imigani', imiganiController.getAllImigani);
router.post('/imigani', imiganiController.createImigani);
router.delete('/imigani/:id', imiganiController.deleteImigani);
router.get('/imigani/count', imiganiController.countImigani);
router.get('/imigani/:id', imiganiController.getImiganiById);
router.put('/imigani/:id',imiganiController.updateImigani);

module.exports = router;
