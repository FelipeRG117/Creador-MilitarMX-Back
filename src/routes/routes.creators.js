import express from "express";
const router = express.Router();
//import
import { CreatorsController } from "../controllers/controller.creators.js";
const creatorsController = new CreatorsController();

router.get("/", creatorsController.getCreators);
router.get("/:id", creatorsController.getSingleCreator);
export { router as routesCreators };
