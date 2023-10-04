import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    cpf: { type: String },
    siape: { type: String },
    email: { type: String, required: true },
    senha: { type: String }
}, { versionKey: false });

const usuario = mongoose.model("usuario", usuarioSchema);

export { usuario, usuarioSchema };