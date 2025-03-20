import { institutionModel } from "../models/model.intitutions.js";
import InstitutionDTO from "../dto/institution.dto.js";
export class InstitutionRepository {
  async getAllIntitutions() {
    try {
      //aqui llmaerremos al modelo
      const institutionsData = await institutionModel
        .find()
        .populate("afiliatedCreators")
        .lean();
      const Institutions = institutionsData.map(
        (institution) =>
          new InstitutionDTO({
            id: institution._id.toString(),
            name: institution.name,
            description: institution.description,
            websites: institution.websites,
            images: institution.images,
            adress: institution.adress,
            contactEmail: institution.contactEmail,
            contactPhones: institution.contactPhones,
            afiliatedCreators: institution.afiliatedCreators,
            estabilshedDate: institution.estabilshedDate,
          })
      );
      console.log("esto llega de institutions", Institutions);
      return Institutions;
    } catch (error) {
      console.log(error);
    }
  }
}
