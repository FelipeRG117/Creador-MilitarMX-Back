import { merchModel } from "../models/model.merch.js";

export class MerchRepository {
  async getAllMerch() {
    try {
      //aqui traemremos el modelo
      const Merch = await merchModel.find();
      console.log("mensaje de l", Merch);
      return Merch;
    } catch (error) {
      console.log(error);
    }
  }
}
