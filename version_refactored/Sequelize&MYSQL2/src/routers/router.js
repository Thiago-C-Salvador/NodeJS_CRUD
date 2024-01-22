import express from 'express';
import Selecoes from '../controllers/selecoes.js';

const routes = express.Router();

routes.get('/selecoes', Selecoes.findAllSelecao);
routes.get('/selecoes/:id', Selecoes.findSelecaoId);
routes.post('/selecoes', Selecoes.addSelecao);
routes.put('/selecoes/:id', Selecoes.updateSelecao);
routes.delete('/selecoes/:id', Selecoes.deleteSelecao);

export default routes;