const express = require("express");
const router = express.Router();
const incamarengaController = require("../controllers/incamarengaController");
const { isAdmin } = require ("../middlewares/authentication");

// Get all incamarengas
router.get("/incamarengas", incamarengaController.getAllIncamarengas);

// Get a single incamarenga by ID
router.get("/incamarengas/:id",isAdmin,incamarengaController.getIncamarengaById);

// Create a new incamarenga
router.post("/incamarengas",isAdmin,incamarengaController.createIncamarenga);

// Update an existing incamarenga by ID
router.put("/incamarengas/:id", isAdmin,incamarengaController.updateIncamarenga);

// Delete an incamarenga by ID
router.delete("/incamarengas/:id",isAdmin,incamarengaController.deleteIncamarenga);

module.exports = router;
