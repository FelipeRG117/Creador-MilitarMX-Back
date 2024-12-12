import { productionModel } from "../models/model.production.js";

export class ProductionRepository {
  async getAllProductions() {
    try {
      //aqui vamos a traer el modelo
      const Productions = await productionModel.find();
      console.log(Productions);
      return Productions;
    } catch (error) {
      console.log(error);
    }
  }
}
