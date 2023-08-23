// const { isAdmin } = require('../middlewares/authentication');
const express = require("express");
const router = express.Router();
const kungomaController = require("../controllers/kungomaController");



router.get("/kungoma", kungomaController.getAllKungoma);
router.get("/kungoma/:id", kungomaController.getKungomaById);
router.get('/countTitles', kungomaController.countTitles);
router.post("/kungoma", kungomaController.createKungoma);
router.put("/kungoma/:id", kungomaController.updateKungoma);
router.delete("/kungoma/:id", kungomaController.deleteKungoma);

module.exports = router;
