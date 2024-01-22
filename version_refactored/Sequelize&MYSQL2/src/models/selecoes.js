import Sequelize from 'sequelize';
import db from '../database/db.js';

//criação do banco de dados em linguagem java. 
//É preciso criar o esquema de cada tabela que conterá no bano para que o java script consiga manipula-lás.
/*No caso em estudo criei apenas a "seqSelecoe", sim, no singular, pois o próprimo sequelize pluraliza o nome para "SeqSelecoes". Do contrário,
provavelmente o nome da sua tabela ficará diferente do desejado. como por exemplo neste caso: seqSelecoess*/
const Selecoes = db.define('seqSelecoe',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    selecao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cabeca_chave:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    grupo:{
        type: Sequelize.CHAR,
        allowNull: false
    }
})

export default Selecoes;