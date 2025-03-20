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

  async getSingleCourse(req, res) {
    try {
      const id = req.params.id;
      console.log("esto es id de params", id);
      const course = await coursesRepository.getCourseById(id);
      if (!course) {
        return console.log("esto no es course", course);
      }
      console.log("esto es course en controller", course);
      res.status(200).json(course);
    } catch (error) {
      console.log(error);
    }
  }
}
