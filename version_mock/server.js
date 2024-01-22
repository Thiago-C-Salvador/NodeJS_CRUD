import app from './src/app.js';
import connect from './src/database/db.js';

const DOOR =  process.env.DOOR || 3000;
//método que realiza a conexão com o banco
connect(connectServer());

function connectServer(){
app.listen(DOOR,()=>{console.log("Servidor rodando no endereço http://localhost:"+DOOR)});
}
