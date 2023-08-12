const express = require("express");
const router = express.Router();
const ikenshavugoController = require("../controllers/ikenshavugoController");
// const { isAdmin } = require('../middlewares/authentication');

router.get("/ikenshavugo", ikenshavugoController.getAllIkenshavugo);
router.get("/ikenshavugo/:id", ikenshavugoController.getIkenshavugoById);
router.post("/ikenshavugo", ikenshavugoController.createIkenshavugo);
router.put("/ikenshavugo/:id",  ikenshavugoController.updateIkenshavugo);
router.delete("/ikenshavugo/:id",  ikenshavugoController.deleteIkenshavugo);

module.exports = router;

