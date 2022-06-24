import mongoose, { Schema } from "mongoose";

const SeguidorSchema = new Schema({
  // Id de quem segue
  usuarioId: { type: String, required: true },
  // Id de quem estÁ sendo seguido
  usuarioSeguidoId: { type: String, required: true }
});

export const SeguidorModel =
  mongoose.models.seguidores || mongoose.model("seguidores", SeguidorSchema);
