const express = require('express');
const ubwinshiController = require('../controllers/ubwinshiController');
// const { isAdmin } = require('../middlewares/authentication');

const ubwinshiRouter = express.Router();

ubwinshiRouter.get('/ubwinshi', ubwinshiController.getAllUbwinshi);
ubwinshiRouter.get('/ubwinshi/:id', ubwinshiController.getUbwinshiById);
ubwinshiRouter.post('/ubwinshi', ubwinshiController.addUbwinshi);
ubwinshiRouter.put('/ubwinshi/:id', ubwinshiController.updateUbwinshi);
ubwinshiRouter.delete('/ubwinshi/:id', ubwinshiController.deleteUbwinshi);

module.exports = ubwinshiRouter;
