// const { isAdmin } = require('../middlewares/authentication');
const express = require('express');
const router = express.Router();
const icyansiController = require('../controllers/icyansiController');


// Routes for Icyansi items
router.get('/icyansi', icyansiController.getAllIcyansi);
router.get('/icyansi/:id', icyansiController.getIcyansiById);
router.get('/countTitles', icyansiController.countTitles);
router.post('/icyansi', icyansiController.createIcyansi);
router.put('/icyansi/:id', icyansiController.updateIcyansi);
router.delete('/icyansi/:id', icyansiController.deleteIcyansi);

module.exports = router;
