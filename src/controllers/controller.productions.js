//este controllers guardara videos en cloudinary y trendra los controladores y funciones para  pdoer guardar y crear y traer videos/imagenes en cloudinary
import { ProductionRepository } from "../repositories/repository.production.js";
const productionRepository = new ProductionRepository();

export class ProductionController {
  // Configuration

  // Upload an image
  async uploadImage(url, pid) {
    try {
      const uploadImage = await cloudinary.uploader
        .upload(`${url}`, {
          public_id: "shoes",
          resource_type: "auto", // Cloudinary detectará si es imagen o video
          folder: "videos_creadores", // Opcional: agrupa tus archivos en carpetas
        })
        .catch((error) => {
          console.log(error);
        });

      //aqui configure mi carga de imagen en clodunaty y despues metere esto en mongoose con sus datos tambien para havcer dos operqaciones necesarias y optimizar la carga deimagen  fgvd
      console.log("URL del archivo:", result.secure_url); //Es la URL pública y segura donde estará disponible el archivo.
      return result.secure_url;
    } catch (error) {
      console.log("upload", error);
    }
  }
  //este controller enteregara las urls para que las usen los perfiles ccapaz le pongo doble campo a los parametros o mmm no mejro si entrego las url de de cloudinary para guardarlass enmogno y asi guardamos la url en mongo para poder utilziar en el back en el proceso de la funcion y retorno la url de cloudinary para podeer ensenar eso al fronted

  async optimizeUrl() {
    //Cloudinary es que puedes transformar archivos directamente desde su URL sin necesidad de hacer múltiples copias de diferentes tamaños o versiones.
    const imageCardProfile = cloudinary.url(
      "videos_creadores/imagen_original.jpg",
      {
        width: 300,
        height: 300,
        crop: "fit",
      }
    );
    console.log("Imagen redimensionada:", imageCardProfile);

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url("videos_creadores/imagen_original.jpg", {
      fetch_format: "auto",
      quality: "auto",
    });

    console.log(optimizeUrl);
  }

  async autoCropUrl() {
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url("shoes", {
      crop: "auto",
      gravity: "auto",
      width: 500,
      height: 500,
    });

    console.log(autoCropUrl);
  }

  //hacer el get all todos jaja
  async getProductions(req, res) {
    try {
      //importacion de productions Repository
      const Productions = await productionRepository.getAllProductions();
      console.log("Esrto es productions", Productions);
      return res.json(Productions);
    } catch (error) {
      console.log(error);
    }
  }
}
