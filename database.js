import mongoose from "mongoose";

export default mongoose
  .connect(
    "mongodb+srv://FelipeReyes50045:coderhouse@vidar771.pck1zis.mongodb.net/creadorMilitarMX?retryWrites=true&w=majority&appName=vidar771"
  )
  .then((e) => {
    console.log("se inicio la conexion");
  })
  .catch((error) => {
    console.log(error);
  });
