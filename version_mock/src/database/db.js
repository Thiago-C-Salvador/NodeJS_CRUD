import { Sequelize } from 'sequelize';



function connect(conexaoServer=()=>{}){
const sequelize = new Sequelize (
    'db-api-node',
    'root',
    '',{host: 'localhost', dialect: 'mysql', port:'3306'}
);

sequelize.authenticate()
.then
(()=>{
    conexaoServer();
    console.log("Banco de dados conectado com sucesso!");
})
.catch
((error)=>{
    console.log("Erro: Falha ao conecatar com o banco de dados\n" + error);
});
}
export default connect;
