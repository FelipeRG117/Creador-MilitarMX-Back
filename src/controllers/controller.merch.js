//impoertaciondde rpository
import { MerchRepository } from "../repositories/repository.merch.js";
const merchRepository = new MerchRepository();

export class MerchController {
  async getMerch(req, res) {
    try {
      //aqui importaremos la funcion de get all merch

      const Merch = await merchRepository.getAllMerch();
      console.log("estos datos llegan de merch", Merch);
      return res.json(Merch);
    } catch (error) {
      console.log(error);
    }
  }
}
