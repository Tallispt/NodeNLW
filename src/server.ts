import express, { response } from 'express';

import "./database";
import { routes } from "./routes";

const app = express();

/**
 *  GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Altarar uma informação expecífica
 */

/**
 * Tipos de parametros
 * Routes Params => Parameros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 * 
 * }
 */

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Sever is running on port 3333"));