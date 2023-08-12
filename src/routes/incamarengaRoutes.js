const express = require("express");
const router = express.Router();
const incamarengaController = require("../controllers/incamarengaController");
// const { isAdmin } = require ("../middlewares/authentication");

// Get all incamarengas
router.get("/incamarenga", incamarengaController.getAllIncamarengas);

// Get a single incamarenga by ID
router.get("/incamarenga/:id",incamarengaController.getIncamarengaById);

// Create a new incamarenga
router.post("/incamarenga",incamarengaController.createIncamarenga);

// Update an existing incamarenga by ID
router.put("/incamarenga/:id", incamarengaController.updateIncamarenga);

// Delete an incamarenga by ID
router.delete("/incamarenga/:id",incamarengaController.deleteIncamarenga);

module.exports = router;
