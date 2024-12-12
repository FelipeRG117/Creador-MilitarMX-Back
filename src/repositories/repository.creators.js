import { modelCreator } from "../models/model.creators.js";

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
      const creators = await modelCreator
        .find()
        .populate("institutions") // Reemplaza los IDs de instituciones cond aqui en isntitutions viene el problema
        .populate("sponsors") // Reemplaza los IDs de sponsors con los documentos correspondientes
        .populate("courses"); // Reemplaza los IDs de cursos con los documentos correspondientes
      //aqui no me llega el pupulate
      console.log("Esto es creators", creators);

      return creators;
    } catch (error) {
      console.log(error);
    }
  }
}
