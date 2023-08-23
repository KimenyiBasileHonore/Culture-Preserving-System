import express from "express";
import ibisakuzoController from "../controllers/ibisakuzoController";
// import { isAdmin } from "../middlewares/authentication";
// import * as Validation from "../middlewares/validation/ibisakuzoValidation";

const ibisakuzoRouter = express.Router();

ibisakuzoRouter.get('/ibisakuzo', ibisakuzoController.getAllIbisakuzo);
ibisakuzoRouter.get('/ibisakuzo/count', ibisakuzoController.getIbisakuzoCount); 
ibisakuzoRouter.get('/ibisakuzo/:id', ibisakuzoController.getIbisakuzoById);
ibisakuzoRouter.post('/ibisakuzo', ibisakuzoController.addIbisakuzo);
ibisakuzoRouter.put('/ibisakuzo/:id', ibisakuzoController.updateIbisakuzo);
ibisakuzoRouter.delete('/ibisakuzo/:id', ibisakuzoController.deleteIbisakuzo);

export default ibisakuzoRouter;
