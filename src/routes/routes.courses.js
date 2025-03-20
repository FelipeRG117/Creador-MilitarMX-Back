import express from "express";
const router = express.Router();

import { CoursesController } from "../controllers/controller.courses.js";
const coursesController = new CoursesController();

router.get("/", coursesController.getCourses);
router.get("/:id", coursesController.getSingleCourse);

export { router as routesCourses };
