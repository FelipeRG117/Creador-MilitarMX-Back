import { merchModel } from "../models/model.merch.js";
import MerchDTO from "../dto/merch.dto.js";
export class MerchRepository {
  async getAllMerch() {
    try {
      //aqui traemremos el modelo
      const merchData = await merchModel
        .find()
        .populate("afiliatedCreators")
        .lean();
      const Merch = merchData.map(
        (merch) =>
          new MerchDTO({
            id: merch._id.toString(),
            name: merch.name,
            description: merch.description,
            price: merch.price,
            category: merch.category,
            stock: merch.stock,
            sizes: merch.sizes,
            images: merch.images,
            afiliatedCreators: merch.afiliatedCreators,
            discount: merch.discount,
            isFeatured: merch.isFeatured,
            offer: merch.offer,
          })
      );
      console.log("mensaje de l", Merch);
      return Merch;
    } catch (error) {
      console.log(error);
    }
  }
}
