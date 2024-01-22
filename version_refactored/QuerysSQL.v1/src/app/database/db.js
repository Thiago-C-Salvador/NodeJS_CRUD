import mysql from 'mysql';
import credenciaisDB from '../../config/database.js';

//o objeto credenciaisDB contém todas as informações necessárias para a conexão
const connection = mysql.createConnection(credenciaisDB);

connection.connect();

export const consulta=(sql, valores=null, mensagemReject)=>
{
    return new Promise ((resolver, reject)=>{
        connection.query(sql, valores, (error, result, fields)=>
        {
            if(error) return reject(`${mensagemReject}.\nErro: ${error}`);
            const row = JSON.parse(JSON.stringify(result));
            return resolver(row);
        });
    });
};

export default connection;
