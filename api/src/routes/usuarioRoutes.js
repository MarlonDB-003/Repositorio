import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const routes = express.Router();

routes.get("/usuarios", UsuarioController.listarUsuarios);
routes.get("/usuarios/:id", UsuarioController.listarUsuarioPorId);
routes.post("/usuarios", UsuarioController.cadastrarUsuario);
routes.put("/usuarios/:id", UsuarioController.atualizarUsuario);
routes.delete("/usuarios/:id", UsuarioController.excluirUsuario);

export default routes;