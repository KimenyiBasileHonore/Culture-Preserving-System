const express = require("express");
const router = express.Router();
const ibyivugoController = require("../controllers/ibyivugoController");
const { isAdmin} = require("../middlewares/authentication");

// Get all Ibyivugo
router.get("/ibyivugo", ibyivugoController.getAllIbyivugo);

// Get a specific Ibyivugo by ID
router.get("/ibyivugo/:id",isAdmin, ibyivugoController.getIbyivugoById);

// Create a new Ibyivugo
router.post("/ibyivugo/",isAdmin, ibyivugoController.createIbyivugo);

// Update an existing Ibyivugo
router.put("/ibyivugo/:id",isAdmin, ibyivugoController.updateIbyivugo);

// Delete an existing Ibyivugo
router.delete("/ibyivugo/:id", isAdmin, ibyivugoController.deleteIbyivugo);

module.exports = router;
