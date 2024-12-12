import mongoose from "mongoose";

const ProductionSchema = new mongoose.Schema(
  {
    // Relación con Institution o Creator (puede ser uno u otro, no ambos)
    relatedEntity: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "entityType",
    },
    entityType: {
      type: String,
      required: true,
      enum: ["creators", "institutions"], // Especifica el modelo relacionado
    },
    // Información del video
    title: { type: String, required: true },
    description: { type: String },
    videoUrl: { type: String, required: true }, // URL del video (puede ser un enlace externo)
    thumbnailUrl: { type: String }, // Miniatura del video
    tags: [{ type: String }], // Etiquetas para categorizar
    // Interacciones
    views: { type: Number, default: 0 }, // Contador de vistas
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }], // Usuarios que dieron 'Me gusta'
    isFeatured: { type: Boolean, default: false }, // Marcar como destacado
    uploadDate: { type: Date, default: Date.now }, // Fecha de subida no se hace el populate como corresponde  y en postman deberia de aparecer el registro y no el ID
  },
  { timestamps: true }
);

export const productionModel = mongoose.model("productions", ProductionSchema);
