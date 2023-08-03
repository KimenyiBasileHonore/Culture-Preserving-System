const { isAdmin } = require('../middlewares/authentication');
const express = require('express');
const router = express.Router();
const icyansiController = require('../controllers/icyansiController');


// Routes for Icyansi items
router.get('/icyansi', icyansiController.getAllIcyansi);
router.get('/icyansi/:id',isAdmin, icyansiController.getIcyansiById);
router.post('/icyansi',isAdmin, icyansiController.createIcyansi);
router.put('/icyansi/:id',isAdmin, icyansiController.updateIcyansi);
router.delete('/icyansi/:id',isAdmin, icyansiController.deleteIcyansi);

module.exports = router;
