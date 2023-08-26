import express from "express";
import userRoute from "./userRoute";
import feedbackRouter from "./feedbackRoute";
import ibisakuzoRouter from "./ibisakuzoRouter";
import indirimboRoutes from "./indirimboRoutes";
import inkaRoutes from "./inkaRoutes";
import imivugoRoutes from "./imivugoRoutes"
import imiganimiremireRoutes from "./imiganimiremireRoutes";
import imiganiabanaRoutes from "./imiganiabanaRoutes";
import ubwinshiRoutes from "./ubwinshiRoutes";
import ikenshavugoRoutes from "./ikenshavugoRoutes";
import  kungomaRoutes from "./kungomaRoutes";
import icyansiRoutes from "./icyansiRoutes";
import umwamiRoutes from "./umwamiRoutes";
import ahantuRoutes from "./ahantuRoutes"
import incamarengaRoutes from "./incamarengaRoutes";
import ibyivugoRoutes from "./ibyivugoRoutes";
import imiganiRoutes from "./imiganiRoutes";
import kunkaRoutes from "./kunkaRoute";
import generateRoutes from "./pdfRoutes";
import timeSpentRoutes from "./timeSpentRoutes";


const route = express.Router();


route.use('/user', userRoute);
route.use('/feedback',feedbackRouter);
route.use('/ibisakuzo', ibisakuzoRouter);
route.use('/indirimbo', indirimboRoutes);
route.use('/inka',inkaRoutes);
route.use('/imivugo',imivugoRoutes);
route.use('/imiganimiremire',imiganimiremireRoutes);
route.use('/imiganiabana',imiganiabanaRoutes);
route.use('/ubwinshi', ubwinshiRoutes);
route.use('/ikenshavugo', ikenshavugoRoutes);
route.use('/kungoma', kungomaRoutes);
route.use('/icyansi', icyansiRoutes);
route.use('/umwami', umwamiRoutes);
route.use('/ahantu',ahantuRoutes);
route.use('/incamarenga', incamarengaRoutes);
route.use('/ibyivugo', ibyivugoRoutes);
route.use('/imigani',imiganiRoutes);
route.use('/kunka', kunkaRoutes);
route.use('/tracking', timeSpentRoutes);

// route.use('/generate', generateRoutes);


export default route ;