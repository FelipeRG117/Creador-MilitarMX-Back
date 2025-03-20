import { modelCreator } from "../models/model.creators.js";
import CreatorDTO from "../dto/creator.dto.js";

export class CreatorsRepository {
  async createCreator(
    creatorName,
    name,
    images,
    militaryGrade,
    institutions,
    sponsors,
    merch
  ) {
    try {
      console.log(modelCreator, "esto es modelooooo");
    } catch (error) {
      console.log(error);
    }
  }

  async getCreators() {
    try {
      const creatorsData = await modelCreator
        .find()
        .populate("institutions")
        .populate("sponsors")
        .populate("merches")
        .populate("courses")
        .lean();
      const creators = creatorsData.map(
        (creator) =>
          new CreatorDTO({
            id: creator._id.toString(),
            email: creator.email,
            creatorName: creator.creatorName,
            name: creator.name,
            images: creator.images,
            militaryGrade: creator.militaryGrade,
            institutions: creator.institutions,
            sponsors: creator.sponsors,
            merches: creator.merches,
            courses: creator.courses,
            notification: creator.notification,
          })
      );
      console.log("Esto es creators", creators);

      return creators;
    } catch (error) {
      console.log(error);
    }
  }

  async getSingleCreator(id) {
    try {
      const creator = await modelCreator
        .findById(id)
        .populate("institutions")
        .populate("sponsors")
        .populate("merches")
        .populate("courses")
        .lean();

      const singleCreator = new CreatorDTO({
        id: creator._id.toString(),
        email: creator.email,
        creatorName: creator.creatorName,
        name: creator.name,
        images: creator.images,
        militaryGrade: creator.militaryGrade,
        institutions: creator.institutions,
        sponsors: creator.sponsors,
        merches: creator.merches,
        courses: creator.courses,
        notification: creator.notification,
      });

      return singleCreator;
    } catch (error) {
      console.log(error);
    }
  }
}
