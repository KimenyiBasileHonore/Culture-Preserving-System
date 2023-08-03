const express = require("express");
const router = express.Router();
const ikenshavugoController = require("../controllers/ikenshavugoController");
const { isAdmin } = require('../middlewares/authentication');

router.get("/ikenshavugo", ikenshavugoController.getAllIkenshavugo);
router.get("/ikenshavugo/:id", isAdmin, ikenshavugoController.getIkenshavugoById);
router.post("/ikenshavugo",isAdmin, ikenshavugoController.createIkenshavugo);
router.put("/ikenshavugo/:id", isAdmin, ikenshavugoController.updateIkenshavugo);
router.delete("/ikenshavugo/:id", isAdmin, ikenshavugoController.deleteIkenshavugo);

module.exports = router;

