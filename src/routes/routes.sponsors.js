import express from "express";
const router = express.Router();
//cntroller
import { SponsorController } from "../controllers/controller.sponsors.js";
const sponsorController = new SponsorController();

router.get("/", sponsorController.getSponsors);

export { router as routesSponsors };
