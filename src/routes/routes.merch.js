import express from "express";
const router = express.Router();
//importacion del controller
import { MerchController } from "../controllers/controller.merch.js";
const merchController = new MerchController();

router.get("/", merchController.getMerch);

export { router as routesMerch };
