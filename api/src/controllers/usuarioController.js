import { usuario } from "../model/Usuario.js";

class UsuarioController {

    static async listarUsuarios(req, res) {
        try {
            const listaUsuarios = await usuario.find({});
            res.status(200).json(listaUsuarios);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarUsuarioPorId(req, res) {
        try {
            const id = req.params.id;
            const usuarioEncontrado = await usuario.findById(id);
            res.status(200).json(usuarioEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
        }
    }

    static async cadastrarUsuario(req, res) {
        try {
            const novoUsuario = await usuario.create(req.body);
            res.status(201).json({ message: "criado com sucesso", usuario: novoUsuario });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar o usuario` });
        }
    }

    static async atualizarUsuario(req, res) {
        try {
            const id = req.params.id;
            await usuario.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "usuario atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do usuario` });
        }
    }

    static async excluirUsuario(req, res) {
        try {
            const id = req.params.id;
            await usuario.findByIdAndDelete(id);
            res.status(200).json({ message: "usuario excluido com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão do usuario` });
        }
    }

};

export default UsuarioController;