import { productionModel } from "../models/model.production.js";
import ProductionDTO from "../dto/production.dto.js";
export class ProductionRepository {
  async getAllProductions() {
    try {
      //aqui vamos a traer el modelo
      const productionsData = await productionModel
        .find()
        .populate("relatedEntity")
        .populate("likes")
        .lean();

      console.log("esto es produccions data", productionsData);
      const Productions = productionsData.map(
        (production) =>
          new ProductionDTO({
            id: production._id.toString(),
            relatedEntity: production.relatedEntity,
            entityType: production.entityType,
            title: production.title,
            description: production.description,
            videoUrl: production.videoUrl,
            thumbnailUrl: production.thumbnailUrl,
            tags: production.tags,
            views: production.views,
            likes: production.likes,
            isFeatured: production.isFeatured,
          })
      );
      console.log(Productions);
      return Productions;
    } catch (error) {
      console.log(error);
    }
  }
}
