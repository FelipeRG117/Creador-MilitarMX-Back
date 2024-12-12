import { CoursesRepository } from "../repositories/repository.courses.js";
const coursesRepository = new CoursesRepository();

export class CoursesController {
  async getCourses(req, res, next) {
    try {
      const course = await coursesRepository.getCourses();
      console.log("esto es courses", course);
      res.status(200).json(course);
    } catch (error) {
      console.log("este es de courses", error);
    }
  }
}
