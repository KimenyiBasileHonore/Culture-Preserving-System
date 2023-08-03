const { isAdmin } = require('../middlewares/authentication');
const express = require("express");
const router = express.Router();
const kungomaController = require("../controllers/kungomaController");



router.get("/kungoma", kungomaController.getAllKungoma);
router.get("/kungoma/:id", isAdmin, kungomaController.getKungomaById);
router.post("/kungoma",isAdmin, kungomaController.createKungoma);
router.put("/kungoma/:id", isAdmin,kungomaController.updateKungoma);
router.delete("/kungoma/:id", isAdmin,kungomaController.deleteKungoma);

module.exports = router;
