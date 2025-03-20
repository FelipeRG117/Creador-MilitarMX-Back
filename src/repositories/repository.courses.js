import { coursesModel } from "../models/model.courses.js";
import CourseDTO from "../dto/course.dto.js";

export class CoursesRepository {
  async getCourses() {
    try {
      const courseData = await coursesModel
        .find()
        .populate("videos")
        .populate("creators")
        .lean();
      const course = courseData.map(
        (courses) =>
          new CourseDTO({
            id: courses._id.toString(),
            title: courses.title,
            description: courses.description,
            category: courses.category,
            images: courses.image,
            videos: courses.videos,
            plans: courses.plans,
            creators: courses.creators,
            tags: courses.tags,
            isActive: courses.isActive,
          })
      );
      console.log("esto es courses", course);
      return course;
    } catch (error) {
      console.log("hubo un error en getCourses", error);
    }
  }

  async getCourseById(id) {
    try {
      console.log("ESTO ES ID ", id);
      const course = await coursesModel
        .findById(id)
        .populate("videos")
        .populate("creators")
        .lean(); //buscar el significado de lean

      if (!course) {
        return console.log("esto no es course by Id, o no fue encontrado");
      }
      console.log("esto es courses", course);
      const singleCourse = new CourseDTO({
        id: course._id.toString(),
        title: course.title,
        description: course.description,
        category: course.category,
        images: course.image,
        videos: course.videos,
        plans: course.plans,
        creators: course.creators,
        tags: course.tags,
        isActive: course.isActive,
      });

      console.log("esto es con DTO", singleCourse);
      return singleCourse;
    } catch (error) {
      console.log(error);
    }
  }
}
