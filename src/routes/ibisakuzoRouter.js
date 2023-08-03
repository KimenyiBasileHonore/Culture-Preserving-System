import express from "express";
import ibisakuzoController from "../controllers/ibisakuzoController";
import { isAdmin } from "../middlewares/authentication";
import * as Validation from "../middlewares/validation/ibisakuzoValidation";

const ibisakuzoRouter = express.Router();

ibisakuzoRouter.get('/ibisakuzo', ibisakuzoController.getAllIbisakuzo);
ibisakuzoRouter.get('/ibisakuzo/:id', isAdmin, ibisakuzoController.getIbisakuzoById); // New route for getting by ID
ibisakuzoRouter.post('/ibisakuzo', isAdmin, Validation.ibisakuzoValidation, ibisakuzoController.addIbisakuzo);
ibisakuzoRouter.put('/ibisakuzo/:id', isAdmin, Validation.ibisakuzoValidation, ibisakuzoController.updateIbisakuzo);
ibisakuzoRouter.delete('/ibisakuzo/:id', isAdmin, ibisakuzoController.deleteIbisakuzo);

export default ibisakuzoRouter;
