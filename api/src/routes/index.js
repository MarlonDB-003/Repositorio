import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import usuarios from "./usuarioRoutes.js"

const routes = (app) => {
    // Obtenha o diretório atual do módulo
    const currentDirectory = dirname(fileURLToPath(
        import.meta.url));

    // Obtenha o diretório pai do diretório atual
    const staticDirectory = join(currentDirectory, '../../../');

    // Configure o Express para servir recursos estáticos (HTML, CSS, JS, etc.) do diretório anterior
    app.use(express.static(staticDirectory));

    // Configurar a rota para a URL raiz ("/") para exibir o arquivo "index.html"
    app.route('/').get((req, res) => res.status(200).sendFile(join(staticDirectory, 'web', 'index.html')));
    // Configurar o middleware para servir arquivos estáticos (CSS, JS, imagens)
    app.use(express.static(join(staticDirectory, 'web')));

    app.use(express.json(), usuarios);
};

export default routes;