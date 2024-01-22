import express from 'express';
import routes from './routers/router.js'
import db from './database/db.js'

const app = express();
app.use(express.json());
app.use(routes);

db.sync()
    .then(() => {
        console.log("Conexão com o banco de dados estabelecida.");
    }).catch((error) => {
        console.log("Error: a conexão com o banco de dados falhou.\nErro: " + error);
    })

const PORT = process.env.PORT|| 3000;
app.listen(PORT, () => { console.log("Servidor rodando no endereço http://localhost:" + PORT) });

