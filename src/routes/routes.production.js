import express from "express";
const router = express.Router();
import { ProductionController } from "../controllers/controller.productions.js";
const productionControllers = new ProductionController();

router.get("/", productionControllers.getProductions);

export { router as routesProduction };
