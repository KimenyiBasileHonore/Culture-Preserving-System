const express = require("express");
const router = express.Router();
const ibyivugoController = require("../controllers/ibyivugoController");
// const { isAdmin} = require("../middlewares/authentication");


router.get("/ibyivugo", ibyivugoController.getAllIbyivugo);
router.get("/ibyivugo/:id", ibyivugoController.getIbyivugoById);
router.post("/ibyivugo/", ibyivugoController.createIbyivugo);
router.put("/ibyivugo/:id", ibyivugoController.updateIbyivugo);
router.delete("/ibyivugo/:id",  ibyivugoController.deleteIbyivugo);
router.get("/countTitles", ibyivugoController.countTitles);

module.exports = router;
