import {consulta} from '../database/db.js';
class SelecaoRepository{

    findAll() 
    {
        const sql = 'SELECT * FROM selecoes;';
        return consulta(sql,"Falha ao realizar a consulta no banco de dados.");
    };
    //==========================================================================================
    findById(id) 
    {
        const sql = 'SELECT * FROM selecoes WHERE id = ?;';
        return consulta(sql, id, "Falha ao realizar a consulta no banco de dados.");
    };
    //==========================================================================================
    create(selecao) 
    {
        const sql = 'INSERT INTO selecoes SET ?;';
        return consulta(sql, selecao, "Falha ao tentar criar no registro no banco de dados.");
    };
    //==========================================================================================
    async update(dados, id)
    {   
        const sqlRow = 'SELECT id FROM selecoes WHERE id=?';
        const retorno =  await consulta(sqlRow, id, "Falha ao atualizar dados do banco de dados.");
        if(retorno[0]!==undefined){
            const sql = 'UPDATE selecoes SET ? WHERE id=?';
            return consulta(sql, [dados,id], "Falha ao atualizar dados do banco de dados.");
        }
        else
        {
            return 'Registro não existe não banco de dados.'
        }
    };
    //==========================================================================================
    async delete(id) 
    {
        const sqlRow = 'SELECT id FROM selecoes WHERE id=?';
        const retorno =  await consulta(sqlRow, id, "Falha ao atualizar dados do banco de dados.");
        if(retorno[0]!==undefined){
            const sql = 'DELETE FROM selecoes WHERE id=?;';
            return consulta(sql, id, "Falha ao tentar excluir registro.");
        }
        else
        {
            return 'Registro não existe não banco de dados.'
        }

    };
}
export default new SelecaoRepository;