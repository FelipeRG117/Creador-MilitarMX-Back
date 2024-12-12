import { InstitutionRepository } from "../repositories/repository.intitutions.js";
const institutionRepository = new InstitutionRepository();

export class InstitutionController {
  async getInstitutions(req, res) {
    try {
      //aqui traere funciond e repository
      const Institutions = await institutionRepository.getAllIntitutions();
      console.log("estas son las instituciones", Institutions);
      res.json(Institutions);
    } catch (error) {
      console.log(error);
    }
  }
}
