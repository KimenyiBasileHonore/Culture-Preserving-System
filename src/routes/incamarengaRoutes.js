const express = require("express");
const router = express.Router();
const incamarengaController = require("../controllers/incamarengaController");

router.get("/incamarenga", incamarengaController.getAllIncamarengas);
router.get("/incamarenga/count", incamarengaController.getIncamarengaCount); 
router.get("/incamarenga/:id", incamarengaController.getIncamarengaById);
router.post("/incamarenga", incamarengaController.createIncamarenga);
router.put("/incamarenga/:id", incamarengaController.updateIncamarenga);
router.delete("/incamarenga/:id", incamarengaController.deleteIncamarenga);


module.exports = router;
