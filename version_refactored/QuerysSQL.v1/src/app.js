import Express from 'express';
import router from './routers/router.js';

const app = Express();

//indicar para o express que irá receber responses do body em formato json
app.use(Express.json());
app.use(router);

export default app;