import express from "express";
const router = express.Router();
import { CoursesController } from "../controllers/controller.courses";
import { CreatorsController } from "../controllers/controller.creators";
import { MerchController } from "../controllers/controller.merch";
import { ProductionController } from "../controllers/controller.productions";
import { SponsorController } from "../controllers/controller.sponsors";
const coursesController = new CoursesController();
const creatorsContoller = new CreatorsController();
const merchController = new MerchController();
const productionController = new ProductionController();
const sponsorController = new SponsorController();

router.get("/", async (req, res, next) => {
  try {
    const courses = await coursesController.getCourses();
    const creators = await creatorsContoller.getCreators();
    const merch = await merchController.getMerch();
    const productions = await productionController.getProductions();
    const sponsors = await sponsorController.getSponsors();

    res.status(200).json({ courses, creators, merch, productions, sponsors });
  } catch (error) {
    console.log("esto es error de home", error);
  }
});

export { router as routesHome };
