import mongoose from "mongoose";

const CoursesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Nombre del curso
    description: { type: String, required: true }, // Descripción general
    category: { type: String, required: true }, // Tiro o Protección
    image: [{ type: String }], // Imagen representativa del curso
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "production" }],
    plans: [
      {
        planName: { type: String, required: true }, // Nombre del plan
        price: { type: Number, required: true }, // Precio del plan
        duration: { type: String }, // Duración del plan (por ejemplo, "3 meses")
        benefits: [{ type: String }], // Lista de beneficios
      },
    ],
    creators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "creator", // Relación con el creador del curso
        required: true,
      },
    ],
    tags: [{ type: String }], // Etiquetas para categorizar el curso
    isActive: { type: Boolean, default: true }, // Curso activo/inactivo
  },
  { timestamps: true }
);

export const coursesModel = mongoose.model("course", CoursesSchema);
