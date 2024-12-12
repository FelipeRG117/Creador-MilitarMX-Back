import { institutionModel } from "../models/model.intitutions.js";

export class InstitutionRepository {
  async getAllIntitutions() {
    try {
      //aqui llmaerremos al modelo
      const Institutions = await institutionModel.find();
      console.log("esto llega de institutions", Institutions);
      return Institutions;
    } catch (error) {
      console.log(error);
    }
  }
}
