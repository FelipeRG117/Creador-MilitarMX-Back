import { CreatorsRepository } from "../repositories/repository.creators.js";
const creatorsRepository = new CreatorsRepository();

export class CreatorsController {
  async getCreators(req, res) {
    try {
      //se van a pedir los datos aqui con req y se mandaranal create user
      console.log("llego el mensajn en el controller");
      const creators = await creatorsRepository.getCreators();
      console.log("esto esrceators", creators);
      return res.json(creators);
    } catch (error) {
      console.log(error);
    }
  }
}
