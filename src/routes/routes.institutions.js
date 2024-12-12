import express from "express";
const router = express.Router();
import { InstitutionController } from "../controllers/controller.institutions.js";
const institutionController = new InstitutionController();

router.get("/", institutionController.getInstitutions);

export { router as routesIntitutions };
