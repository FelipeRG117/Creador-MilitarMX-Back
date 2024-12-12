import { coursesModel } from "../models/model.courses.js";

export class CoursesRepository {
  async getCourses() {
    try {
      const course = await coursesModel.find();
      console.log("esto es courses", course);
      return course;
    } catch (error) {
      console.log("hubo un error en getCourses", error);
    }
  }
}
