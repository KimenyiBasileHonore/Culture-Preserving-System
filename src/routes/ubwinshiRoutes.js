const express = require('express');
const ubwinshiController = require('../controllers/ubwinshiController');
const { isAdmin } = require('../middlewares/authentication');

const ubwinshiRouter = express.Router();

ubwinshiRouter.get('/ubwinshi', ubwinshiController.getAllUbwinshi);
ubwinshiRouter.get('/ubwinshi/:id', isAdmin, ubwinshiController.getUbwinshiById);
ubwinshiRouter.post('/ubwinshi', isAdmin, ubwinshiController.addUbwinshi);
ubwinshiRouter.put('/ubwinshi/:id', isAdmin, ubwinshiController.updateUbwinshi);
ubwinshiRouter.delete('/ubwinshi/:id', isAdmin, ubwinshiController.deleteUbwinshi);

module.exports = ubwinshiRouter;
